<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="card-content">
            <el-page-header content="用户管理" @back="goBack"> </el-page-header>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column label="角色" width="auto" align="center">
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-user">{{
                    scope.row.role
                  }}</el-button>
                </template>
              </el-table-column>
              <el-table-column
                label="姓名"
                prop="username"
                width="auto"
                align="center"
              >
              </el-table-column>
              <el-table-column
                label="操作"
                fixed="right"
                align="center"
                width="200px"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="!superman"
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    :disabled="scope.row._id !== userInfo._id"
                    >编辑</el-button
                  >
                  <el-button
                    v-else
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    :disabled="!superman"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="paginationOption.currentPage"
              :page-size="paginationOption.pageSize"
              layout="total, prev, pager, next, jumper"
              :total="paginationOption.total"
            >
            </el-pagination>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 修改个人信息对话框 -->
    <el-dialog
      title="Edit information"
      :visible.sync="dialogFormVisibleEditUserInfo"
      class="dialog-wrapper"
      @closed="editUserInfoFormResetFields"
    >
      <!-- 提交个人信息表单 -->
      <el-form
        :model="editFormData"
        :rules="editRule"
        label-position="left"
        ref="editFormRule"
        :label-width="formLabelWidth"
      >
        <el-form-item label="UserName" prop="username">
          <el-input
            v-model="editFormData.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="useremail">
          <el-input
            v-model="editFormData.useremail"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="editFormData.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password Again">
          <el-input
            v-model="editFormData.password2"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Role">
          <el-radio-group v-model="editFormData.role" :disabled="!superman">
            <el-radio label="admin">Admin</el-radio>
            <el-radio label="normal">Normal</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <!-- 编辑个人信息对话框交互按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="editUserInfoCancleHandler">取 消</el-button>
        <el-button type="primary" @click="editUserInfoSubmitHandler"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  isvalidEmail,
  isvalidUsername,
  isValidPassword,
} from "../utils/validata";
import { mapState } from "vuex";
export default {
  name: "users",
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
    // 二次确认密码
    let validatePassword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.editFormData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      paginationOption: {
        total: 0,
        pageSize: 5,
        currentPage: 1,
      },
      tableData: [],
      dialogFormVisibleEditUserInfo: false,
      formLabelWidth: "120px",
      editFormData: {
        username: "",
        useremail: "",
        password: "",
        password2: "",
        role: "",
        _id: "",
      },
      index: "",
      editRule: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        useremail: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        password2: [{ validator: validatePassword2, trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    superman: function() {
      return this.userInfo.role === "admin";
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    handleEdit: async function(index, row) {
      if (this.userInfo._id === row._id) {
        // 修改自己的信息
        this.editFormData.username = this.userInfo.username;
        this.editFormData.useremail = this.userInfo.useremail;
        this.editFormData.role = this.userInfo.role;
        this.editFormData._id = this.userInfo._id;
        this.index = index;
      } else {
        // 修改他人信息
        let res = await this.axios.post("/lv1/searchuser", { _id: row._id });
        if (res.status === 200) {
          username, role, useremail;
          const { username, role, useremail, _id } = res.data.data;
          this.editFormData.username = username;
          this.editFormData.useremail = useremail;
          this.editFormData.role = role;
          this.editFormData._id = _id;
          this.index = index;
        } else {
          this.$notify.info({
            title: res.statusText,
            message: res.data.msg,
          });
        }
      }
      this.dialogFormVisibleEditUserInfo = true;
    },
    handleDelete: async function(index, row) {
      let res = await this.axios.post("/lv2/deleteuser", { _id: row._id });
      if (res.status === 200) {
        this.tableData.splice(index, 1);
        this.$notify.success({
          title: res.statusText,
          message: res.data.msg,
        });
      } else {
        this.$notify.info({
          title: res.statusText,
          message: res.data.msg,
        });
      }
    },
    handleCurrentChange: async function(val) {
      let { data } = await this.axios.post("/lv1/allusers", {
        pagenum: val,
        pagesize: this.paginationOption.pageSize,
      });
      const { userCount, users } = data.data;
      this.paginationOption.total = userCount;
      this.tableData = users;
    },
    editUserInfoCancleHandler() {
      this.dialogFormVisibleEditUserInfo = false;
    },
    editUserInfoSubmitHandler: async function() {
      let res = await this.axios.post("/lv2/edituser", this.editFormData);
      if (res.status === 200) {
        let { data } = res.data;
        this.tableData.splice(this.index, 1, {
          _id: data._id,
          role: data.role,
          username: data.username,
        });
        this.dialogFormVisibleEditUserInfo = false;
      } else {
        this.$notify.info({
          title: res.statusText,
          message: res.data.msg,
        });
      }
    },
    editUserInfoFormResetFields() {
      this.$refs.editFormRule.resetFields();
    },
  },
  async created() {
    let { data } = await this.axios.post("/lv1/allusers", {
      pagenum: 1,
      pagesize: 5,
    });
    const { userCount, users } = data.data;
    this.paginationOption.total = userCount;
    this.tableData = users;
  },
};
</script>

<style lang="less" scoped>
.dialog-wrapper {
  > div {
    border-radius: 5px;
  }
}
::v-deep .el-dialog {
  border-radius: 5px;
  .el-dialog__header {
    border-bottom: 1px solid #e9ecef;
    padding: 20px;
    font-weight: bolder;
  }
}
</style>
