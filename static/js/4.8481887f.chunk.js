(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{141:function(t,n,e){"use strict";var i=e(0),a=e.n(i);n.a=a.a.createContext(null)},142:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e(0);function a(t,n){"function"===typeof t?t(n):t&&(t.current=n)}function o(t,n){return i.useMemo((function(){return null==t&&null==n?null:function(e){a(t,e),a(n,e)}}),[t,n])}},143:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e(140),a=(e(0),e(44));function o(){return Object(i.a)()||a.a}},144:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return a}));var i=function(t){return t.scrollTop};function a(t,n){var e=t.timeout,i=t.style,a=void 0===i?{}:i;return{duration:a.transitionDuration||"number"===typeof e?e:e[n.mode]||0,delay:a.transitionDelay}}},148:function(t,n,e){"use strict";var i=e(10),a=e(12),o=(e(6),e(0)),r=e.n(o),s=e(31),u=e.n(s),c=!1,l=e(141),f="unmounted",p="exited",d="entering",h="entered",m="exiting",b=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var a,o=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?o?(a=p,i.appearStatus=d):a=h:a=n.unmountOnExit||n.mountOnEnter?f:p,i.state={status:a},i.nextCallback=null,i}Object(a.a)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===f?{status:p}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==h&&(n=d):e!==d&&e!==h||(n=m)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:f})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,a=this.props.nodeRef?[i]:[u.a.findDOMNode(this),i],o=a[0],r=a[1],s=this.getTimeouts(),l=i?s.appear:s.enter;!t&&!e||c?this.safeSetState({status:h},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,r),this.safeSetState({status:d},(function(){n.props.onEntering(o,r),n.onTransitionEnd(l,(function(){n.safeSetState({status:h},(function(){n.props.onEntered(o,r)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:u.a.findDOMNode(this);n&&!c?(this.props.onExit(i),this.safeSetState({status:m},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=a[0],r=a[1];this.props.addEndListener(o,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===f)return null;var n=this.props,e=n.children,a=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,Object(i.a)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(l.a.Provider,{value:null},"function"===typeof e?e(t,a):r.a.cloneElement(r.a.Children.only(e),a))},n}(r.a.Component);function E(){}b.contextType=l.a,b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:E,onEntering:E,onEntered:E,onExit:E,onExiting:E,onExited:E},b.UNMOUNTED=f,b.EXITED=p,b.ENTERING=d,b.ENTERED=h,b.EXITING=m;n.a=b},150:function(t,n,e){"use strict";var i=e(1),a=e(7),o=e(0),r=(e(6),e(31));var s=e(148),u=e(142),c=e(143),l=e(43),f=e(144);function p(t,n){var e=function(t,n){var e,i=n.getBoundingClientRect();if(n.fakeTransform)e=n.fakeTransform;else{var a=window.getComputedStyle(n);e=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var o=0,r=0;if(e&&"none"!==e&&"string"===typeof e){var s=e.split("(")[1].split(")")[0].split(",");o=parseInt(s[4],10),r=parseInt(s[5],10)}return"left"===t?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-i.left,"px)"):"right"===t?"translateX(-".concat(i.left+i.width-o,"px)"):"up"===t?"translateY(".concat(window.innerHeight,"px) translateY(").concat(r-i.top,"px)"):"translateY(-".concat(i.top+i.height-r,"px)")}(t,n);e&&(n.style.webkitTransform=e,n.style.transform=e)}var d={enter:l.b.enteringScreen,exit:l.b.leavingScreen},h=o.forwardRef((function(t,n){var e=t.children,l=t.direction,h=void 0===l?"down":l,m=t.in,b=t.onEnter,E=t.onEntered,x=t.onEntering,v=t.onExit,g=t.onExited,O=t.onExiting,j=t.style,y=t.timeout,w=void 0===y?d:y,k=t.TransitionComponent,C=void 0===k?s.a:k,S=Object(a.a)(t,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=Object(c.a)(),N=o.useRef(null),_=o.useCallback((function(t){N.current=r.findDOMNode(t)}),[]),L=Object(u.a)(e.ref,_),R=Object(u.a)(L,n),D=function(t){return function(n){t&&(void 0===n?t(N.current):t(N.current,n))}},M=D((function(t,n){p(h,t),Object(f.b)(t),b&&b(t,n)})),V=D((function(t,n){var e=Object(f.a)({timeout:w,style:j},{mode:"enter"});t.style.webkitTransition=T.transitions.create("-webkit-transform",Object(i.a)({},e,{easing:T.transitions.easing.easeOut})),t.style.transition=T.transitions.create("transform",Object(i.a)({},e,{easing:T.transitions.easing.easeOut})),t.style.webkitTransform="none",t.style.transform="none",x&&x(t,n)})),I=D(E),P=D(O),U=D((function(t){var n=Object(f.a)({timeout:w,style:j},{mode:"exit"});t.style.webkitTransition=T.transitions.create("-webkit-transform",Object(i.a)({},n,{easing:T.transitions.easing.sharp})),t.style.transition=T.transitions.create("transform",Object(i.a)({},n,{easing:T.transitions.easing.sharp})),p(h,t),v&&v(t)})),X=D((function(t){t.style.webkitTransition="",t.style.transition="",g&&g(t)})),F=o.useCallback((function(){N.current&&p(h,N.current)}),[h]);return o.useEffect((function(){if(!m&&"down"!==h&&"right"!==h){var t=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function i(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var r=this,s=function(){t.apply(r,a)};clearTimeout(n),n=setTimeout(s,e)}return i.clear=function(){clearTimeout(n)},i}((function(){N.current&&p(h,N.current)}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[h,m]),o.useEffect((function(){m||F()}),[m,F]),o.createElement(C,Object(i.a)({nodeRef:N,onEnter:M,onEntered:I,onEntering:V,onExit:U,onExited:X,onExiting:P,appear:!0,in:m,timeout:w},S),(function(t,n){return o.cloneElement(e,Object(i.a)({ref:R,style:Object(i.a)({visibility:"exited"!==t||m?void 0:"hidden"},j,e.props.style)},n))}))}));n.a=h},152:function(t,n,e){t.exports={container:"LoginView_container__2cgRt",tittle:"LoginView_tittle__bPQuC",form:"LoginView_form__17MMM",label:"LoginView_label__33FlG",input:"LoginView_input__2SsFj",button:"LoginView_button__2Unyx"}},164:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return f}));var i=e(45),a=e(0),o=e(13),r=e(34),s=e(152),u=e.n(s),c=e(150),l=e(2);function f(){var t=Object(o.b)(),n=Object(a.useState)(""),e=Object(i.a)(n,2),s=e[0],f=e[1],p=Object(a.useState)(""),d=Object(i.a)(p,2),h=d[0],m=d[1];return Object(l.jsxs)("div",{className:u.a.container,children:[Object(l.jsx)(c.a,{direction:"right",in:!0,timeout:300,mountOnEnter:!0,unmountOnExit:!0,children:Object(l.jsx)("h1",{className:u.a.tittle,children:"Log in"})}),Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(r.a.logIn({email:s,password:h})),f(""),m("")},className:u.a.form,autoComplete:"off",children:[Object(l.jsx)("label",{className:u.a.label,children:"Mail"}),Object(l.jsx)("input",{className:u.a.input,type:"email",name:"email",value:s,onChange:function(t){var n=t.target;f(n.value)}}),Object(l.jsx)("label",{className:u.a.label,children:"Password"}),Object(l.jsx)("input",{className:u.a.input,type:"password",name:"password",value:h,onChange:function(t){var n=t.target;m(n.value)}}),Object(l.jsx)("button",{className:u.a.button,type:"submit",children:"Log in"})]})]})}}}]);
//# sourceMappingURL=4.8481887f.chunk.js.map