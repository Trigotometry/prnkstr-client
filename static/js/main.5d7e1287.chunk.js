(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(71)},41:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(31),r=t.n(n),s=(t(41),t(0)),l=t.n(s),c=t(13),o=t(14),i=t(16),m=t(4),d=t(5),u=t(8),h=t(6),g=t(9),p=t(7),_=t.n(p),v="https://prnkstrserver.herokuapp.com/masters.json",E=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this)))._handleSignUp=function(a){e.setState({SignUp:!0,SignIn:!1})},e._handleName=function(a){e.setState({masterName:a.target.value})},e._handlePassword=function(a){e.setState({password:a.target.value})},e._handleConfirmPassword=function(a){e.setState({confirmPassword:a.target.value})},e._handleSubmit=function(a){a.preventDefault(),_.a.get(v).then(function(a){for(var t=0;t<a.data.length;t+=1)e.state.masterName===a.data[t].name&&e.state.password===a.data[t].password_digest&&e.setState({masterMatch:!0,masterId:a.data[t].id})}).catch(function(a){e.setState({loginError:a})})},e.state={masterName:"",password:"",confirmPassword:"",SignUp:!1,SignIn:!0,masterMatch:!1,loginError:"",masterId:null},e}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return!0===this.state.SignUp?l.a.createElement(o.a,{to:"/signUp"}):!0===this.state.masterMatch?l.a.createElement(o.a,{to:"/slaves/"+this.state.masterId}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("img",{className:"img-fluid py-4",src:"/prnkstr-react/prnkstr_long_logo.svg"}))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6 text-center"},l.a.createElement("h4",null,"Sign In"))),l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("div",{className:"row justify-content-center mb-4"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Master Name"),l.a.createElement("input",{className:"form-control",onChange:this._handleName,type:"text",placeholder:"Enter, master..."})))),l.a.createElement("div",{className:"row justify-content-center mb-4"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"form-control",onChange:this._handlePassword,type:"password",placeholder:"Password..."})))),l.a.createElement("div",{className:"row text-center justify-content-center mb-4"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("button",{className:"btn btn-block btn-outline-success",type:"submit"},"Submit")))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",Object(i.a)({className:"col-lg-4 col-md-6"},"className","text-center"),l.a.createElement(c.b,{to:"/signup"},l.a.createElement("h5",{className:"text-danger"},"No Account? No Worries.")))))}}]),a}(s.Component),f="https://prnkstrserver.herokuapp.com/masters.json",b=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this)))._handleChange=function(a){e.setState({masterName:a.target.value})},e._handlePassword=function(a){e.setState({password:a.target.value})},e._handleConfirmPassword=function(a){e.setState({confirmPassword:a.target.value})},e._handleSubmit=function(a){a.preventDefault(),_.a.post(f,{name:e.state.masterName,password_digest:e.state.password}).then(function(a){console.log(a.data),e.setState({id:a.data.id,signedUp:!0})})},e.state={signedUp:!1},e}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return this.state.signedUp?l.a.createElement(o.a,{to:"/slaves/"+this.state.id}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("img",{className:"img-fluid py-4",src:"/prnkstr-react/prnkstr_long_logo.svg"}))),l.a.createElement("div",{className:"row justify-content-center text-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("h4",null,"Sign Up"))),l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"form-group",controlId:"formBasicEmail"},l.a.createElement("label",null,"Master Name"),l.a.createElement("input",{className:"form-control",onChange:this._handleChange,type:"text"})))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"form-group",controlId:"formBasicPassword"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"form-control",onChange:this._handlePassword,type:"password"})))),l.a.createElement("div",{className:"row justify-content-center mb-4"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("div",{className:"form-group",controlId:"formBasicPassword"},l.a.createElement("label",null,"Confirm Password"),l.a.createElement("input",{className:"form-control",onChange:this._handleConfirmPassword,type:"password"})))),l.a.createElement("div",{className:"row text-center justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("button",{className:"btn btn-block btn-outline-danger",type:"submit"},"Submit")))))}}]),a}(s.Component),C="https://prnkstrserver.herokuapp.com/masters",N=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).getSlaves=function(e){_.a.get("".concat(C+"/"+e+".json")).then(function(e){t.setState({users:e.data.users})})},t.state={masterId:e.match.params.master,users:[]},t.getSlaves(t.state.masterId),t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("img",{className:"img-fluid py-4",src:"/prnkstr-react/prnkstr_long_logo.svg"}))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6 text-center"},l.a.createElement("h2",{className:"mb-4"},"Current Connections"))),l.a.createElement("div",{className:"row justify-content-center"},this.state.users.map(function(e){return l.a.createElement(c.b,{to:"/controlpanel/"+e.id,className:"text-danger"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"card border-danger mb-4"},l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text",key:e.id},e.name)))))})))}}]),a}(s.Component),S=t(17),k=t.n(S),y=t(21),x=(t(70),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).editSlave=function(){var e=Object(y.a)(k.a.mark(function e(a){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.props.match.params.user,_.a.put("https://prnkstrserver.herokuapp.com/users/".concat(n,".json"),{name:t.state.name,fill_murray:t.state.fill_murray,place_cage:t.state.place_cage,custom_header:t.state.custom_header,custom_header_text:t.state.custom_header_text,paragraph_background:t.state.paragraph_background,paragraph_color:t.state.paragraph_color,snap:t.state.snap,stranger_things:t.state.stranger_things,page_flip:t.state.page_flip,otherside:t.state.otherside_mode,marquee:t.state.marquee,marquee_element:t.state.marquee_element,marquee_speed:t.state.marquee_speed,unicorn_mode:t.state.unicorn_mode,word_swapper:t.state.word_swapper,existing_word:t.state.existing_word,new_word:t.state.new_word,hidden_video:t.state.hidden_video,hidden_video_url:t.state.hidden_video_url,hidden_video_element:t.state.hidden_video_element,master_id:t.state.master_id}).then(function(e){return console.log(e.status)}).catch(function(e){return console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t._handleSubmit=function(){var e=Object(y.a)(k.a.mark(function e(a){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t.editSlave();case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t._handleChangeName=function(e){t.setState({name:e.target.value})},t._handleChangeFillMurray=function(e){t.setState({fill_murray:e.target.value})},t._handleChangePlaceCage=function(e){t.setState({place_cage:e.target.value})},t._handleChangeCustomHeader=function(e){t.setState({custom_header:e.target.value})},t._handleChangeCustomHeaderText=function(e){t.setState({custom_header_text:e.target.value})},t._handleChangeParagraphBackground=function(e){t.setState({paragraph_background:e.target.value})},t._handleChangeParagraphColor=function(e){t.setState({paragraph_color:e.target.value})},t._handleChangeSnap=function(e){t.setState({snap:e.target.value})},t._handleChangeStrangerThings=function(e){t.setState({stranger_things:e.target.value})},t._handleChangePageFlip=function(e){t.setState({page_flip:e.target.value})},t._handleChangeOtherside=function(e){t.setState({otherside:e.target.value})},t._handleChangeMarquee=function(e){t.setState({marquee:e.target.value})},t._handleChangeMarqueeElement=function(e){t.setState({marquee_element:e.target.value})},t._handleChangeMarqueeSpeed=function(e){t.setState({marquee_speed:e.target.value})},t._handleChangeUnicornMode=function(e){t.setState({unicorn_mode:e.target.value})},t._handleChangeWordSwapper=function(e){t.setState({word_swapper:e.target.value})},t._handleChangeExistingWord=function(e){t.setState({existing_word:e.target.value})},t._handleChangeNewWord=function(e){t.setState({new_word:e.target.value})},t._handleChangeHiddenVideo=function(e){t.setState({hidden_video:e.target.value})},t._handleChangeHiddenVideoUrl=function(e){t.setState({hidden_video_url:e.target.value})},t._handleChangeHiddenVideoElement=function(e){t.setState({hidden_video_element:e.target.value})},t._handleChangeMasterId=function(e){t.setState({master_id:e.target.value})},t._toggleFillMurray=function(){t.setState({fill_murray:!t.state.fill_murray})},t._togglePlaceCage=function(){t.setState({place_cage:!t.state.place_cage})},t._toggleCustomHeader=function(){t.setState({custom_header:!t.state.custom_header})},t._toggleSnap=function(){t.setState({snap:!t.state.snap})},t._toggleStrangerThings=function(){t.setState({stranger_things:!t.state.stranger_things})},t._togglePageFlip=function(){t.setState({page_flip:!t.state.page_flip})},t._toggleOtherside=function(){t.setState({otherside:!t.state.otherside})},t._toggleMarquee=function(){t.setState({marquee:!t.state.marquee})},t._toggleUnicornMode=function(){t.setState({unicorn_mode:!t.state.unicorn_mode})},t._toggleWordSwapper=function(){t.setState({word_swapper:!t.state.word_swapper})},t._toggleHiddenVideo=function(){t.setState({hidden_video:!t.state.hidden_video})},t.state={},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchSlave()}},{key:"fetchSlave",value:function(){var e=this,a=this.props.match.params.user;_.a.get("https://prnkstrserver.herokuapp.com/users/".concat(a,".json")).then(function(a){e.setState({name:a.data.name,fill_murray:a.data.fill_murray,place_cage:a.data.place_cage,custom_header:a.data.custom_header,custom_header_text:a.data.custom_header_text,paragraph_background:a.data.paragraph_background,paragraph_color:a.data.paragraph_color,snap:a.data.snap,stranger_things:a.data.stranger_things,page_flip:a.data.page_flip,otherside:a.data.otherside_mode,marquee:a.data.marquee,marquee_element:a.data.marquee_element,marquee_speed:a.data.marquee_speed,unicorn_mode:a.data.unicorn_mode,word_swapper:a.data.word_swapper,existing_word:a.data.existing_word,new_word:a.data.new_word,hidden_video:a.data.hidden_video,hidden_video_url:a.data.hidden_video_url,hidden_video_element:a.data.hidden_video_element,master_id:a.data.master_id},function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e;return l.a.createElement("div",{className:"BackdropColor"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-4 col-md-6"},l.a.createElement("img",{className:"img-fluid py-4",src:"/prnkstr-react/prnkstr_long_white.svg"}))),l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this._handleSubmit,className:"gridme"},l.a.createElement("div",{className:"postItlrg postIt",id:"nameBox"},l.a.createElement("label",null,"Now Editing:"),l.a.createElement("input",{className:"nameInput",type:"text",name:"name",value:this.state.name,onChange:this._handleChangeName})),l.a.createElement("div",{className:"postItlrg postIt",id:"fillMurrayBox"},l.a.createElement("h4",{className:"textPopper"},"Fill Murray?"),l.a.createElement("input",{type:"checkbox",onChange:this._toggleFillMurray,value:this.state.fill_murray,checked:this.state.fill_murray,className:"inlineBlock"}),l.a.createElement("h6",null,"* All images to Bill Murray")),l.a.createElement("div",{className:"postItlrg postIt",id:"placeCageBox"},l.a.createElement("h4",{className:"textPopper"},"Place Cage?"),l.a.createElement("input",{type:"checkbox",onChange:this._togglePlaceCage,value:this.state.place_cage,checked:this.state.place_cage}),l.a.createElement("h6",null,"* All images to Nicolas Cage")),l.a.createElement("div",{className:"postItlrg postIt",id:"customHeaderBox"},l.a.createElement("input",{type:"checkbox",onChange:this._toggleCustomHeader,value:this.state.custom_header,checked:this.state.custom_header}),l.a.createElement("h5",null,"Custom Header Text"),l.a.createElement("input",{type:"text",name:"custom_header_text",value:this.state.custom_header_text,onChange:this._handleChangeCustomHeaderText}),l.a.createElement("h6",null," *Insert Custom Heading Here ")),l.a.createElement("div",{className:"postItlrg postIt",id:"customBackgroundBox"},l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.paragraph_background,onChange:this._handleChangeParagraphBackground}),l.a.createElement("h5",{className:"textPopper"},"Paragraph Background Color"),l.a.createElement("input",{type:"text",name:"paragraph_color",value:this.state.paragraph_color,onChange:this._handleChangeParagraphColor}),l.a.createElement("h6",{className:"textPopper"},"*Pick a color to change all paragraphs to")),l.a.createElement("div",{className:"postItsml postIt",id:"strangerThings"},l.a.createElement("h4",{className:"textPopper"},"Stranger Things"),l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.stranger_things,onChange:this._toggleStrangerThings,checked:this.state.stranger_things}),l.a.createElement("h6",{className:"textPopper"},"*Flip images")),l.a.createElement("div",{className:"postItsml postIt",id:"flipPage"},l.a.createElement("h4",null,"Page Flip"),l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.page_flip,onChange:this._togglePageFlip,checked:this.state.page_flip})),l.a.createElement("div",{className:"postItsml postIt",id:"othersideMode"},l.a.createElement("h5",null,"Otherside Mode"),l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.otherside,onChange:this._toggleOtherside,checked:this.state.otherside}),l.a.createElement("h6",null,"*Mirror whole page")),l.a.createElement("div",{className:"postItlrg postIt",id:"marqueeBox"},l.a.createElement("div",null,l.a.createElement("marquee",null," ",l.a.createElement("h1",{className:"marquee"},"Marquee Circa 2001 "))),l.a.createElement("div",{className:"flexMe"},l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.marquee,onChange:this._toggleMarquee,checked:this.state.marquee})),l.a.createElement("div",null,l.a.createElement("h6",{className:"textPopper stroker"},"*Pick a an element to marquee"),l.a.createElement("input",{type:"text",name:"custom_header_text",value:this.state.marquee_element,onChange:this._handleChangeMarqueeElement}),l.a.createElement("h6",{className:"textPopper stroker"},"Marquee Speed"),l.a.createElement("input",(e={type:"range",min:"0",max:"100",value:"50",name:"custom_header_text"},Object(i.a)(e,"value",this.state.marquee_speed),Object(i.a)(e,"onChange",this._handleChangeMarqueeSpeed),e))))),l.a.createElement("div",{className:"postItsml postIt",id:"unicornMode"},l.a.createElement("h5",null,"Unicorn Mode"),l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.unicorn_mode,onChange:this._toggleUnicornMode,checked:this.state.unicorn_mode})),l.a.createElement("div",{className:"postItlrg postIt",id:"wordSwapperBox"},l.a.createElement("h5",null,"Word Swapper"),l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.word_swapper,onChange:this._toggleWordSwapper,checked:this.state.word_swapper}),l.a.createElement("h6",null,"Existing Word"),l.a.createElement("input",{type:"text",name:"custom_header_text",value:this.state.existing_word,onChange:this._handleChangeExistingWord}),l.a.createElement("h6",null,"New Word"),l.a.createElement("input",{type:"text",name:"custom_header_text",value:this.state.new_word,onChange:this._handleChangeNewWord})),l.a.createElement("div",{className:"postItlrg postIt",id:"hiddenVideoBox"},l.a.createElement("h5",{className:"textPopper"},"Hidden Video"),l.a.createElement("input",{type:"checkbox",name:"paragraph_background",value:this.state.hidden_video,onChange:this._toggleHiddenVideo,checked:this.state.hidden_video}),l.a.createElement("h6",{className:"textPopper"},"Hidden Video URL"),l.a.createElement("input",{type:"text",name:"custom_header_text",value:this.state.hidden_video_url,onChange:this._handleChangeHiddenVideoUrl})),l.a.createElement("div",{className:"postItlrg postIt",id:"awwSnapBox"},l.a.createElement("input",{className:"",type:"checkbox",onChange:this._toggleSnap,value:this.state.snap,checked:this.state.snap}),l.a.createElement("label",{className:""},"Snap")),l.a.createElement("div",{className:"postItsml postIt",id:"submitButtonBox"},l.a.createElement("input",{type:"submit",className:"",value:"Update",id:"submitButton"}),l.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.handleCancel},"Cancel")))))}}]),a}(s.Component)),w=t(34),j=t(2),P="https://prnkstrserver.herokuapp.com/users.json",O=function(e){function a(){var e;Object(m.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).state={users:[]},e.saveUser=e.saveUser.bind(Object(j.a)(e));return _.a.get(P).then(function(a){e.setState({users:a.data})}),e}return Object(g.a)(a,e),Object(d.a)(a,[{key:"saveUser",value:function(e){var a=this;_.a.post(P,{name:e.name,fill_murray:e.fill_murray,place_cage:e.place_cage,custom_header:e.custom_header,custom_header_text:e.custom_header_text,paragraph_background:e.paragraph_background,paragraph_color:e.paragraph_color,snap:e.snap,master_id:e.master_id}).then(function(e){console.log("results data",e),a.setState({users:[].concat(Object(w.a)(a.state.users),[e.data])})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"User"),l.a.createElement(I,{onSubmit:this.saveUser}),l.a.createElement(M,{users:this.state.users}))}}]),a}(s.Component),I=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).state={name:"",fill_murray:!1,place_cage:!1,custom_header:!1,custom_header_text:"",paragraph_background:"",paragraph_color:"",snap:!1,master_id:""},e._handleChangeName=e._handleChangeName.bind(Object(j.a)(e)),e._handleChangeFillMurray=e._handleChangeFillMurray.bind(Object(j.a)(e)),e._handleChangePlaceCage=e._handleChangePlaceCage.bind(Object(j.a)(e)),e._handleChangeCustomHeader=e._handleChangeCustomHeader.bind(Object(j.a)(e)),e._handleChangeCustomHeaderText=e._handleChangeCustomHeaderText.bind(Object(j.a)(e)),e._handleChangeParagraphBackground=e._handleChangeParagraphBackground.bind(Object(j.a)(e)),e._handleChangeParagraphColor=e._handleChangeParagraphColor.bind(Object(j.a)(e)),e._handleChangeSnap=e._handleChangeSnap.bind(Object(j.a)(e)),e._handleChangeMasterId=e._handleChangeMasterId.bind(Object(j.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(j.a)(e)),e}return Object(g.a)(a,e),Object(d.a)(a,[{key:"_handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"_handleChangeFillMurray",value:function(e){this.setState({fill_murray:e.target.value})}},{key:"_handleChangePlaceCage",value:function(e){this.setState({place_cage:e.target.value})}},{key:"_handleChangeCustomHeader",value:function(e){this.setState({custom_header:e.target.value})}},{key:"_handleChangeCustomHeaderText",value:function(e){this.setState({custom_header_text:e.target.value})}},{key:"_handleChangeParagraphBackground",value:function(e){this.setState({paragraph_background:e.target.value})}},{key:"_handleChangeParagraphColor",value:function(e){this.setState({paragraph_color:e.target.value})}},{key:"_handleChangeSnap",value:function(e){this.setState({snap:e.target.value})}},{key:"_handleChangeMasterId",value:function(e){this.setState({master_id:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state),this.setState({name:"",fill_murray:!1,place_cage:!1,custom_header:!1,custom_header_text:"",paragraph_background:"",paragraph_color:"",snap:!1,master_id:""})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("label",null," Name  "),l.a.createElement("textarea",{onChange:this._handleChangeName,value:this.state.name}),l.a.createElement("label",null," FillMurray   "),l.a.createElement("textarea",{onChange:this._handleChangeFillMurray,value:this.state.fill_murray}),l.a.createElement("label",null," PlaceCage  "),l.a.createElement("textarea",{onChange:this._handleChangePlaceCage,value:this.state.place_cage}),l.a.createElement("label",null," CustomHeader  "),l.a.createElement("textarea",{onChange:this._handleChangeCustomHeader,value:this.state.custom_header}),l.a.createElement("label",null," CustomHeaderText  "),l.a.createElement("textarea",{onChange:this._handleChangeCustomHeaderText,value:this.state.custom_header_text}),l.a.createElement("label",null," ParagraphBackground  "),l.a.createElement("textarea",{onChange:this._handleChangeParagraphBackground,value:this.state.paragraph_background}),l.a.createElement("label",null," ParagraphColor  "),l.a.createElement("textarea",{onChange:this._handleChangeParagraphColor,value:this.state.paragraph_color}),l.a.createElement("label",null," Snap  "),l.a.createElement("textarea",{onChange:this._handleChangeSnap,value:this.state.snap}),l.a.createElement("label",null," MasterId  "),l.a.createElement("input",{type:"number",onChange:this._handleChangeMasterId,value:this.state.master_id}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"button",type:"submit",value:"Create User"})))}}]),a}(s.Component),M=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",null,this.props.users.map(function(e){return l.a.createElement("p",{key:e.id},"User name:\xa0",e.name,"\xa0\xa0|\xa0\xa0FillMurray:\xa0",e.fill_murray,"\xa0\xa0|\xa0\xa0PlaceCage:\xa0",e.place_cage,"\xa0\xa0|\xa0\xa0CustomHeader:\xa0",e.custom_header,"\xa0\xa0|CustomHeaderText:\xa0",e.custom_header_text,"\xa0\xa0|Paragraph Background:\xa0",e.paragraph_background,"\xa0\xa0|Paragraph Color:\xa0",e.paragraph_color,"\xa0\xa0|Snap:\xa0",e.snap,"\xa0\xa0|\xa0\xa0Master ID:\xa0",e.master_id," ")})))}}]),a}(s.Component),q=O,B=l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(o.b,{exact:!0,path:"/",component:E}),l.a.createElement(o.b,{exact:!0,path:"/SignIn",component:E}),l.a.createElement(o.b,{exact:!0,path:"/SignUp",component:b}),l.a.createElement(o.b,{exact:!0,path:"/slaves/:master",component:N}),l.a.createElement(o.b,{exact:!0,path:"/controlpanel/:user",component:x}),l.a.createElement(o.b,{exact:!0,path:"/addslave",component:q})));r.a.render(B,document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5d7e1287.chunk.js.map