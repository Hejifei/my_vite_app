<template>
  <h1>VantTest</h1>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import { Cell, CellGroup } from 'vant';


export default defineComponent({
  name: 'App',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  setup: () => {
    return {
    }
    // return {
    //   <div>
    //     <CellGroup>
    //       <Cell title="单元格" value="内容" />
    //       <Cell title="单元格" value="内容" label="描述信息" />
    //     </CellGroup>
    //   </div>
    // }
  }
})
</script>

<style>
</style>