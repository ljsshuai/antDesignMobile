var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class MangerHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    rightContent={<Icon onClick={()=>{this.props.history.push("/manger/mangerdetailsrg")}} type="ellipsis"/>}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/manger")}}
                >经理管理</NavBar>
            </div>
        );
    };
}
MangerHeader=withRouter(MangerHeader);
export default MangerHeader;