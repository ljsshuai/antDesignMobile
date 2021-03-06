var React = require('react')
import {List,SearchBar} from 'antd-mobile';
import { Form,message} from 'antd';
const Item = List.Item;
import AccountsHeader from './accountsHeader';
import '../public/css/accounts.scss';
class Paylist extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                accounts:654,
                id:66,
                intergral:46045640
            },
            loading:false
        }
    }
    handleSubmit(e){
        e.preventDefault();
        var _thisState=this
        this.props.form.validateFields((err, values) => {
            var formData = this
                .props
                .form
                .getFieldsValue();
            if(!err){
                this.setState({loading:true});
                this.props.loginFn(values).then(data=>{
                    message.info(data.msg);
                    if(data.status==='ok'){
                        history.push('/index');
                    }else{
                        this.setState({loading:false});
                    }
                })
            }
        });
    }
    render(){
        const formItemLayout = {
            labelCol: {
                span:7
            },
            wrapperCol: {
                span:17
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { getFieldDecorator } = this.props.form;

        return(
            <div>
                <AccountsHeader title="账目表" btn="true"/>
                <div className="accountsTitPay">
                    <div>
                        <span>经理人数:5</span>
                        <SearchBar placeholder="请输入经理ID" maxLength={8} />
                    </div>
                </div>
                <div className="paylistTitle">
                   <ul>
                       <li>
                           经理备注
                       </li>
                       <li>
                           上级拨分
                           <p>7000300</p>
                       </li>
                       <li>
                           现有积分
                           <p>70003dfdf00</p>
                       </li>
                       <li>
                           返还积分
                           <p>7000300</p>
                       </li>
                       <li>
                           使用积分
                           <p>7000300</p>
                       </li>
                   </ul>
                </div>
                <List   className="payContentlist">
                    <Item>
                        <ul>
                            <li>
                                充值经理
                            </li>
                            <li>
                                7000900
                            </li>
                            <li>
                                794450
                            </li>
                            <li>
                                1794450
                            </li>
                            <li>
                                8000300
                            </li>
                        </ul>
                    </Item>
                    <Item>
                        <ul>
                            <li>
                                充值经理
                            </li>
                            <li>
                                7000900
                            </li>
                            <li>
                                794450
                            </li>
                            <li>
                                1794450
                            </li>
                            <li>
                                8000300
                            </li>
                        </ul>
                    </Item>
                    <Item>
                        <ul>
                            <li>
                                充值经理
                            </li>
                            <li>
                                7000900
                            </li>
                            <li>
                                794450
                            </li>
                            <li>
                                1794450
                            </li>
                            <li>
                                8000300
                            </li>
                        </ul>
                    </Item>
                </List>


            </div>
        )
    }
}
export default Paylist = Form.create({})(Paylist);

