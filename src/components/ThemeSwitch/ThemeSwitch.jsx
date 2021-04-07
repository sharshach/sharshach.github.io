import React from 'react'
import './theme-switch.css'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
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
        const setData=()=>{
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
        const elementDrag=(e)=> {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos2 = pos4 - e.clientY;
            pos4 = e.clientY;
            // set the element's new position:
            setData();
        }
        const elementTouchDrag=(e)=> {
            // console.log(e)
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos2 = pos4 - e.touches[0].clientY;
            pos4 = e.touches[0].clientY;
            // set the element's new position:
            setData();
        }
        const dragMouseDown=(e)=> {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }
        const onTouchStart=(e)=> {
        // console.log(e);
          e = e || window.event;
          e.preventDefault();
          e.stopPropagation(); 
          // get the mouse cursor position at startup:
          
          pos4 = e.touches[0].clientY;
          document.ontouchend=closeDragElement;
          
          document.ontouchmove = elementTouchDrag;
        }
        elmnt.addEventListener('mousedown', function(e){
            dragMouseDown(e);
        }, false);
        elmnt.addEventListener('touchstart', function(e){
            onTouchStart(e);
        }, false);
        elmnt.addEventListener('touchmove', function(e){
            elementTouchDrag(e);
        }, false);
        elmnt.addEventListener('touchend', function(e){
            closeDragElement()
        }, false);
        
        // elmnt.onmousedown = dragMouseDown;
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
                theme==="dark"?<FontAwesomeIcon  icon={faSun} className="theme-switch-icon theme-switch-icon-sun" fontSize="larger" color="yellow"/>:<NightsStayIcon className="theme-switch-icon" fontSize="large"/>
            }
            </div>
        )
    }
}
