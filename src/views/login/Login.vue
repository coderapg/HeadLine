<template>
  <div class="login-container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      title="登录"
      @click-left="handleBack">
      <template #left>
        <van-icon name="cross" size="18" />
      </template>
    </van-nav-bar>
    <van-cell-group>
    <!-- /顶部导航栏 -->
    <!-- 用户输入框 -->
      <van-field
        v-model="user.mobile"
        icon-prefix="icon"
        left-icon="shouji"
        placeholder="请输入手机号" />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="icon"
        left-icon="yanzhengma"
        placeholder="请输入验证码">
        <template #button>
          <van-button size="mini" color="#3296fa" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- /用户输入框 -->
    <van-button type="info" block color="#3296fa">信息按钮</van-button>
  </div>
</template>

<script>
import { handleBackMixin } from 'utils/mixin'

export default {
  name: 'Login',
  mixins: [handleBackMixin],
  data () {
    return {
      user: {
        mobile: '13611111111',
        code: '246810'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login-container {
    /deep/ .van-nav-bar {
      background-color: #3296fa;
      .van-nav-bar__content {
        height: 44px;
        .van-nav-bar__left {
          .van-icon {
            color: #f2f2f2;
          }
        }
        .van-nav-bar__title {
          color: #fff;
        }
      }
    }
  }
</style>
