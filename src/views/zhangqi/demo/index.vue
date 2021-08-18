<template>
  <section>
    list
    <p>--{{ a }}--</p>
    <p>--{{ getAA }}--</p>
    <!-- 测试按需引入 -->
    <el-select v-model="val" placeholder="">
      <el-option
        v-for="item in []"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="primary" @click="testChange(a)">
      测试按需引入的el-button
    </el-button>
    <mt-button @click="testChangeMutation(a)">
      testChangeMutation
    </mt-button>
    <p><span class="iconfont">&#xe601;</span></p>
    <p>
      <mt-button @click="testAxios">
        调用接口
      </mt-button>
    </p>
    返回的数据----{{ resText }}
  </section>
</template>

<script>
import { demoPost } from '@/api/zhangqi/demo'
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState
} from 'vuex'
export default {
  data() {
    return {
      resText: '',
      val: '1'
    }
  },
  computed: {
    ...mapState({
      a: (state) => state.zhangqi.a
    }),
    ...mapGetters({
      getAA: 'zhangqi/getA'
    })
  },
  methods: {
    async testAxios() {
      try {
        const resData = await demoPost({})
        this.resText = JSON.stringify(resData)
        this.$toast('成功')
      } catch (error) {
        console.log(error)
      }
    },
    ...mapMutations({
      testChangeMutation: 'zhangqi/changeA'
    }),
    ...mapActions({
      testChange: 'zhangqi/changeTest'
    })
  }
}
</script>

