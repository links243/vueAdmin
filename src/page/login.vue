<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt class="avatar" />
      <el-form
        label-position="right"
        label-width="80px"
        :rules="loginRules"
        :model="userForm"
        ref="userForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Login } from "@/api/user.js";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      const regularText = /^1[3456789]\d{9}$/;
      if (value && value.length > 0) {
        return callback();
      } else {
        return callback(new Error("请输入正确的账号"));
      }
    };
    const validatePass = (rule, value, callback) => {
      const regularText = /[0-9]6/;
      if (value && value.length > 0) {
        return callback();
      } else {
        return callback(new Error("请输入正确的密码"));
      }
    };
    return {
      userForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      }
    };
  },
  methods: {
    handleLogin() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("login", this.userForm)
            .then(response => {
              this.$router.push({path: '/index'})
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>