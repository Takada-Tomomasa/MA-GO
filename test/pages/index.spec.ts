import { shallowMount, Wrapper } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () =>{
  let index :Wrapper<Vue>
  index = shallowMount(Index)
it('あんしん運転サポートサービスと表示される', () => {
    expect(index.find('.main-title').text()).toEqual('あんしん運転サポートサービス')
  })
})