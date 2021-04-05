import React from 'react'
import './theme-switch.css'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5Icon from '@material-ui/icons/Brightness5';
export default class ThemeSwitch extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            theme:this.props.theme,
        }
    }
    componentDidUpdate(){
        const {theme}=this.props;
        if(this.state.theme!==theme){
            this.setState({theme})
        }
    }
    ChangeTheme=()=>{
        this.props&&this.props.onChangeTheme&&this.props.onChangeTheme();
    }
    dragElement=(elmnt)=>{
        var  pos2 = 0,pos4 = 0;
        const closeDragElement=()=> {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.ontouchend=null;
            document.onmousemove = null;
            document.ontouchmove=null;
            elmnt.style.top="100px"
        }
        const elementDrag=(e)=> {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            console.log(e);
            pos2 = pos4 - e.clientY;
            pos4 = e.clientY;
            // set the element's new position:
            const newTop = (elmnt.offsetTop - pos2);
            if(newTop>95&&newTop<200){
                elmnt.style.top=newTop + "px";
            }
            if(newTop>199){
                elmnt.style.top="100px";
                closeDragElement();
                this.ChangeTheme();
            }
            if(newTop<97){
                closeDragElement();
            }
        }
        const dragMouseDown=(e)=> {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.ontouchend=closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
          document.ontouchmove = elementDrag;
        }
        if (document.getElementById(elmnt.id)) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id).onmousedown = dragMouseDown;
          document.getElementById(elmnt.id).ontouchstart = dragMouseDown;
          
        } else {
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
          elmnt.ontouchstart=dragMouseDown;
        }
    }
    componentDidMount(){
        const e=document.getElementById("theme-switch")
        this.dragElement(e);
    }
    render() {
        const {theme} = this.state;
        return (
            <div id="theme-switch" className={`theme-switch theme-switch-${theme==="dark"?"light":"dark"}`}>
            {
                theme==="dark"?<Brightness5Icon className="theme-switch-icon" fontSize="large"/>:<NightsStayIcon className="theme-switch-icon" fontSize="large"/>
            }
            </div>
        )
    }
}
