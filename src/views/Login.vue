<template>
  <div class="page">
    <div class="out-form-wrapper">
      <div class="btn-group">
        <el-button
          :class="['btn', btnActive ? 'active' : '']"
          @click="signClickShow"
          >Sign in</el-button
        >
        <el-button
          :class="['btn', btnActive ? '' : 'active']"
          @click="accountClickShow"
          >New account</el-button
        >
      </div>
      <div v-show="btnActive" class="form-wrapper">
        <el-form
          ref="loginForm"
          :model="formLoginData"
          :rules="loginRules"
          label-width="0px"
        >
          <!-- E-mail -->
          <el-form-item prop="useremail">
            <el-input placeholder="E-mail" v-model="formLoginData.useremail">
              <i slot="prefix" class="el-input__icon el-icon-bank-card"></i>
            </el-input>
          </el-form-item>
          <!-- Password -->
          <el-form-item prop="password">
            <el-input
              placeholder="Password"
              v-model="formLoginData.password"
              show-password
            >
              <i slot="prefix" class="el-input__icon el-icon-help"></i>
            </el-input>
          </el-form-item>
          <!-- Submit -->
          <el-form-item>
            <el-button class="login-btn" @click="signClickHandler"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div v-show="!btnActive" class="form-wrapper">
        <el-form
          ref="accountForm"
          :model="formAccountData"
          :rules="accountRules"
          label-width="0px"
        >
          <!-- UserName -->
          <el-form-item prop="username">
            <el-input placeholder="Username" v-model="formAccountData.username">
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <!-- E-mail -->
          <el-form-item prop="useremail">
            <el-input placeholder="E-mail" v-model="formAccountData.useremail">
              <i slot="prefix" class="el-input__icon el-icon-bank-card"></i>
            </el-input>
          </el-form-item>
          <!-- Password -->
          <el-form-item prop="password">
            <el-input
              placeholder="Password"
              show-password
              v-model="formAccountData.password"
            >
              <i slot="prefix" class="el-input__icon el-icon-help"></i>
            </el-input>
          </el-form-item>
          <!-- Submit -->
          <el-form-item>
            <el-button class="login-btn" @click="accountClickHandler"
              >Create account</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  isvalidEmail,
  isvalidUsername,
  isValidPassword,
} from "../utils/validata";
import debounce from "lodash/debounce";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    // 自定义邮箱校验规则
    let validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户邮箱不能为空！"));
      } else if (!isvalidEmail(value)) {
        return callback(new Error("用户邮箱格式错误！"));
      } else {
        return callback();
      }
    };
    // 自定义用户名校验规则
    let validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空！"));
      } else if (!isvalidUsername(value)) {
        return callback(new Error("数字、字母、下划线组合"));
      } else {
        return callback();
      }
    };
    // 自定义密码校验规则
    let validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户密码不能为空！"));
      } else if (!isValidPassword(value)) {
        return callback(new Error("用户密码字母开头数字下划线组成！8~18长度"));
      } else {
        return callback();
      }
    };
    return {
      btnActive: true,
      formAccountData: {
        username: "Mrliu97Crazy_",
        useremail: "2394630102@qq.com",
        password: "mrliu123_",
      },
      formLoginData: {
        useremail: "2394630102@qq.com",
        password: "mrliu123_",
      },
      accountRules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        useremail: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
      loginRules: {
        useremail: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapActions(["actionUserInfo"]),
    // 登录按钮点击事件处理
    signClickShow() {
      this.btnActive = true;
      // 清除注册表但数据
      this.$refs["accountForm"].resetFields();
    },
    // 注册按钮点击事件处理
    accountClickShow() {
      this.btnActive = false;
      this.$refs["loginForm"].resetFields();
    },
    // 登陆按钮点击处理
    signClickHandler: debounce(async function() {
      let valid = await this.$refs.loginForm.validate();
      if (valid) {
        let res = await this.axios.post("/lv1/login", this.formLoginData);
        if (res.status === 200) {
          let { token, userInfo } = res.data.data;
          this.actionUserInfo(userInfo);
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("_id", userInfo._id);
          this.$router.replace("/");
        } else {
          this.$notify.info({
            title: res.statusText,
            message: res.data.msg,
          });
        }
      } else {
        this.$notify.info({
          title: "消息",
          message: "表单校验出现错误，请检查填写字段！",
        });
      }
    }, 1000),
    // 注册按钮点击处理
    accountClickHandler: debounce(async function() {
      let valid = await this.$refs["accountForm"].validate();
      if (valid) {
        let res = await this.axios.post("/lv1/register", this.formAccountData);
        if (res.status === 200) {
          let { token, userinfo } = res.data.data;
          this.actionUserInfo(userinfo);
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("_id", userinfo._id);
          this.$router.replace("/");
        } else {
          this.$notify.info({
            title: res.statusText,
            message: res.data.msg,
          });
        }
      } else {
        this.$notify.info({
          title: "消息",
          message: "表单校验出现错误，请检查填写字段！",
        });
      }
    }, 1000),
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  background-color: #484a55;
  overflow: hidden;
}
.out-form-wrapper {
  background-color: white;
  border-radius: 5px;
  width: 600px;
  margin: 100px auto;
  overflow: hidden;
  .btn-group {
    .btn {
      width: 300px;
      height: 70px;
      margin: 0;
      border: 0;
      background-color: #d2d8d8;
      border-radius: 0;
      &:hover {
        color: initial;
        // background-color: transparent;
      }
      span {
        &:hover {
          color: #606266 !important;
        }
      }
    }
    .active {
      background-color: white;
    }
  }
  .form-wrapper {
    padding: 32px;
    ::v-deep .el-input__inner {
      height: 55px;
      padding-left: 55px;
    }
    ::v-deep .el-input__prefix {
      left: 15px;
    }
    .el-input__icon {
      line-height: 55px;
      font-size: 20px;
    }
    .login-btn {
      height: 52px;
      background-color: #2f889a;
      color: white;
      font-weight: bold;
      width: 100%;
    }
  }
}
</style>
