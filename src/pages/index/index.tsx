import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components';
import './index.scss'
import { createSelector } from 'reselect';
import { getNumSelector } from './selector';
import { addAction, minusAction, asyncAddAction } from './action';
import { bindActionCreators, Dispatch } from 'redux';

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion
const mapSelectorToProps = createSelector(
  getNumSelector,
  (
    numSelector,
  )=>{
  return numSelector
})

const mapDispatchToProps = (dispatch: Dispatch) => 
bindActionCreators({
  addAction,minusAction,asyncAddAction
},dispatch)


type PageOwnProps = {};
type IPageState = {};

type IProps = ReturnType<typeof mapSelectorToProps> & ReturnType<typeof mapDispatchToProps> & PageOwnProps

class Index extends Component<IProps,IPageState> {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
      console.log(this.props);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.addAction}>+</Button>
        <Button className='dec_btn' onClick={this.props.minusAction}>-</Button>
        <Button className='dec_btn' onClick={()=>this.props.asyncAddAction({timeout: 1000})}>async</Button>
        <View><Text>{this.props.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default connect(
  mapSelectorToProps, 
  mapDispatchToProps
)(Index);

