(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{395:function(e,t,n){"use strict";n.r(t);var r,a,o,l,c,s,u,i,m=n(10),p=n.n(m),d=n(12),f=n.n(d),E=n(13),g=n.n(E),h=n(14),v=n.n(h),b=n(15),S=n.n(b),y=n(0),O=n(704),w=n(152),I=n(705),C=n(59),k=n(9),N=n.n(k),A=n(3),j=n.n(A),x=n(17),D=n.n(x),T=n(32),_=n.n(T),R=n(20),q=n(36),B=n.n(q),F=n(35),L=n(113),M=n(1),P=n(38),U=P.j.actions(function(e){return{parseErrors:function(t){var n=Object(M.getEnv)(e).api.parseErrors(t,{default:"Ошибка при удалении"});return Object(M.getEnv)(e).snackBar.show(n.form,{variant:"error"}),n},invokeRequest:function(t,n){return Object(M.getEnv)(e).api.personalSales.deleteSale({saleId:n})}}}),W=Object(P.rb)({ItemModel:P.O}).props({deleteForm:M.types.optional(U,{})}).actions(function(e){return{updateSale:e.afterItemUpdate,delete:function(){return e.deleteForm.request(e.id)}}}),G=Object(P.tb)(W).named("PersonalSales").actions(function(e){return{afterItemDelete:function(t){e.items=e.items.filter(function(e){return e!==t})},parseErrors:function(t){var n=Object(M.getEnv)(e).api.parseErrors(t,{default:"Ошибка при загрузке высокомаржинальных продаж"});return Object(M.getEnv)(e).snackBar.show(n.form,{variant:"error"}),n},invokeRequest:function(t,n){return Object(M.getEnv)(e).api.personalSales.getPersonalSales({query:e.query,offset:t,limit:n,expand:"product"})},changeQuery:function(t){e.query=t,e.forceGetItems()},updateItems:function(t){t.map(function(t){var n=e.items.findIndex(function(e){return e.id==t.id});n&&(e.items[n]=t)})},addItem:function(t){e.items.unshift(t)}}}),J=Object(P.tb)(P.E).named("HighAllowedProducts").actions(function(e){return{parseErrors:function(t){var n=Object(M.getEnv)(e).api.parseErrors(t,{default:"Ошибка при загрузке товаров"});return Object(M.getEnv)(e).snackBar.show(n.form,{variant:"error"}),n},invokeRequest:function(t,n){return Object(M.getEnv)(e).api.highMarginProducts.getAllowedProducts({query:e.query,offset:t,limit:n||""})},changeQuery:function(t){e.query=t,e.forceGetItems()}}}),H=n(21),Q=n.n(H),z=P.K.named("PersonalSalesForm").props({id:M.types.maybeNull(M.types.integer),productId:M.types.maybeNull(M.types.number),amount:M.types.maybeNull(M.types.integer),date:M.types.optional(P.i,{required:!0})}).views(function(e){return{get getData(){var t=e.data,n=t.date,r=Q()(t,["date"]);return _()({},r,{date:n.unix})}}}).actions(function(e){return{invokeRequest:function(){return Object(M.getEnv)(e).api.personalSales.addSale(e.getData)},afterRequest:function(){Object(M.getEnv)(e).snackBar.show(e.data.id?"Продажа успешно изменена":"Продажа успешно добавлена",{variant:"success"})},parseErrors:function(t){var n=Object(M.getEnv)(e).api.parseErrors(t,{404:"Продажа не найдена"});return Object(M.getEnv)(e).snackBar.show(n.form,{variant:"error"}),n},setSale:function(t){e.setData(t)}}}),K=n(724),V=n(726),X=n(18),Y=n.n(X),Z=n(725),$=n(723),ee=n(722),te=n(734),ne=n(220),re=n(663),ae=n.n(re),oe=n(661),le=n.n(oe),ce=n(706),se=n(713),ue=n(265),ie=n.n(ue),me=n(653),pe=n(176),de=n(652),fe=n(371),Ee=n(24),ge=n.n(Ee),he=n(52),ve=n.n(he),be=n(743),Se=Object(R.c)((o=a=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=g()(this,(e=v()(t)).call.apply(e,[this].concat(a))),j()(N()(n),"selectProduct",function(e,t){n.onChange({target:{name:"productId",value:t&&t.product&&t.product.id||null}})}),j()(N()(n),"onChangeNumber",function(e){n.props.form.changeNumber(e.target.name,e.target.value)}),j()(N()(n),"onChange",function(e){n.props.form.change(e.target.name,e.target.value)}),j()(N()(n),"onSubmit",function(){var e=ve()(ge.a.mark(function e(t){var r,a,o,l;return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=n.props,a=r.form,o=r.onSuccess,e.next=4,a.request();case 4:(l=e.sent)&&o(l);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n}return S()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.sale,n=e.isNew,r=e.form;!n&&t&&r.setSale(t)}},{key:"render",value:function(){var e=this.props,t=e.products,n=e.isNew,r=e.form,a=r.sending,o=r.data,l=r.errors,c=t.toJSON().slice();return c.sort(function(e,t){return e.product.name.localeCompare(t.product.name)}),y.createElement(y.Fragment,null,y.createElement(de.a,null,y.createElement("form",{id:"ADD_NEW_SALE_FORM",onSubmit:this.onSubmit},y.createElement(be.a,{options:c,groupBy:function(e){return e.product.name[0]},getOptionLabel:function(e){return e.product.name},onChange:this.selectProduct,value:c.find(function(e){return e.product.id==o.productId})||null,fullWidth:!0,renderInput:function(e){return y.createElement(fe.a,Y()({},e,{error:!!l.productId,helperText:l.productId,name:"productId",label:"Товар",variant:"outlined"}))}}),y.createElement(fe.a,{error:!!l.amount,helperText:l.amount,label:"Количество проданного товара",variant:"outlined",margin:"normal",fullWidth:!0,disabled:a,type:"number",name:"amount",onChange:this.onChangeNumber,value:o.amount||""}),y.createElement(L.h,{date:o.date,errors:l,onChange:this.onChange}))),y.createElement(me.a,null,y.createElement(pe.a,{disabled:a,color:"primary",variant:"contained",fullWidth:!0,type:"submit",form:"ADD_NEW_SALE_FORM"},n?"Добавить":"Изменить")))}}]),t}(y.Component),j()(a,"defaultProps",{isNew:!1,user:"",onSuccess:function(){},onClose:function(){}}),r=o))||r,ye=Object(F.c)(z,{name:"form"})(l=D()(function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})(l=Object(R.c)(l=function(e){function t(){return p()(this,t),g()(this,v()(t).apply(this,arguments))}return S()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,t=e.products.items,n=e.form,r=e.personalSales,a=e.classes;return y.createElement(L.i,{title:"Добавление продаж",loading:n.sending,content:function(e){var a=e.onClose;return y.createElement(Se,{isNew:!0,form:n,products:t,onSuccess:function(e){a(),r.addItem(e)}})}},function(e){var t=e.show;return y.createElement(ce.a,{in:!0,unmountOnExit:!0},y.createElement(se.a,{className:a.fab,onClick:t,color:"primary"},y.createElement(ie.a,null)))})}}]),t}(y.Component))||l)||l)||l,Oe=(c={},j()(c,P.O.STATUS_SALE_REFUSED,"refusedRow"),j()(c,P.O.STATUS_SALE_CONFLICT,"conflictRow"),j()(c,P.O.STATUS_SALE_CONFIRMED,"confirmedRow"),c),we=Object(F.c)(z,{name:"form"})(s=D()(function(e){var t;return t={},j()(t,Oe[P.O.STATUS_SALE_REFUSED],{background:e.palette.error.main}),j()(t,Oe[P.O.STATUS_SALE_CONFLICT],{background:e.palette.caution.main}),j()(t,Oe[P.O.STATUS_SALE_CONFIRMED],{background:e.palette.success.main}),j()(t,"controllsCell",{minWidth:128}),t})(s=Object(R.c)(s=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=g()(this,(e=v()(t)).call.apply(e,[this].concat(a))),j()(N()(n),"afterDelete",function(){n.props.personalSales.afterItemDelete(n.props.sale)}),n}return S()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,t=e.products,n=e.classes,r=e.form,a=e.sale;return y.createElement($.a,{className:n[Oe[a.status]]},y.createElement(ee.a,{align:"center"},a.product.name," (",a.product.productId,")"),y.createElement(ee.a,null,a.amount),y.createElement(ee.a,null,a.dateAsText),y.createElement(ee.a,null,a.createdAtAsText),y.createElement(ee.a,null,a.product.price*a.amount," руб."),y.createElement(ee.a,{className:n.controllsCell},y.createElement(I.a,{container:!0},y.createElement(I.a,{item:!0},a.editAllowed&&y.createElement(L.i,{title:"Редактирование продажи",loading:r.sending,content:function(e){var n=e.onClose;return y.createElement(Se,{form:r,products:t.items,sale:{id:a.id,productId:a.product.id,amount:a.amount,date:a.date},onSuccess:function(e){n(),a.updateSale(e)}})}},function(e){var t=e.show;return y.createElement(te.a,{title:"Редактирование продукта",placement:"top-start"},y.createElement(ne.a,{className:n.iconButton,onClick:t,disabled:!a.editAllowed},y.createElement(le.a,null)))})),y.createElement(I.a,{item:!0},a.deleteAllowed&&y.createElement(L.f,{title:"Удаление продажи",content:"Вы действительно хотите удалить продажу ".concat(a.product.name," ").concat(a.amount,"шт."),loading:a.deleteForm.sending,onSuccess:this.afterDelete,onConfirm:a.delete},function(e){var t=e.show;return y.createElement(te.a,{title:"Удалить продажу",placement:"top-start"},y.createElement(ne.a,{onClick:t,disabled:!a.editAllowed},y.createElement(ae.a,null)))})))))}}]),t}(y.Component))||s)||s)||s,Ie=Object(R.c)(u=function(e){function t(){return p()(this,t),g()(this,v()(t).apply(this,arguments))}return S()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,t=e.personalSales,n={personalSales:t,products:e.products,classes:e.classes};return y.createElement(K.a,null,y.createElement(Z.a,null,y.createElement($.a,null,y.createElement(ee.a,{align:"center"},"Название"),y.createElement(ee.a,null,"Количество"),y.createElement(ee.a,null,"Время продажи"),y.createElement(ee.a,null,"Дата отчета"),y.createElement(ee.a,null,"Вознаграждение"),y.createElement(ee.a,null,"Действия"))),y.createElement(V.a,null,t.items.map(function(e){return y.createElement(we,Y()({key:e.id},n,{sale:e}))})))}}]),t}(y.Component))||u,Ce=Object(F.c)(G,{name:"personalSales"})(i=Object(F.c)(J,{name:"products"})(i=D()(function(e){return{helpItem:{padding:e.spacing(1)},helpBox:{width:e.spacing(2.5),height:e.spacing(2.5),marginRight:e.spacing(1),border:"1px solid gray"},error:{backgroundColor:"#ff5470"},new:{backgroundColor:"#fafafa"},success:{backgroundColor:"#d7ffd7"},caution:{backgroundColor:"#fff5cc"},paper:{zIndex:1,position:"sticky",top:0},root:_()({position:"relative",overflow:"hidden",display:"flex",flexDirection:"column"},e.getAbsoluteBodyHeight(e,"height"))}})(i=Object(R.c)(i=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=g()(this,(e=v()(t)).call.apply(e,[this].concat(a))),j()(N()(n),"onChange",function(){return n.props.personalSales.froceGetItems()}),n}return S()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.props.products.setLimit(null).getItems(),this.props.personalSales.getItems()}},{key:"render",value:function(){var e=this.props,t=e.personalSales,n=e.products,r=e.classes;return y.createElement("div",{className:r.root},y.createElement(w.a,{className:r.paper},y.createElement(I.a,{container:!0},y.createElement(I.a,{item:!0,className:r.helpItem},y.createElement(I.a,{container:!0,alignItems:"center"},y.createElement("div",{className:B()(r.helpBox,r.error)}),y.createElement(C.a,null,"- отклонено"))),y.createElement(I.a,{item:!0,className:r.helpItem},y.createElement(I.a,{container:!0,alignItems:"center"},y.createElement("div",{className:B()(r.helpBox,r.new)}),y.createElement(C.a,null,"- новый"))),y.createElement(I.a,{item:!0,className:r.helpItem},y.createElement(I.a,{container:!0,alignItems:"center"},y.createElement("div",{className:B()(r.helpBox,r.success)}),y.createElement(C.a,null,"- подтверждено"))),y.createElement(I.a,{item:!0,className:r.helpItem},y.createElement(I.a,{container:!0,alignItems:"center"},y.createElement("div",{className:B()(r.helpBox,r.caution)}),y.createElement(C.a,null,"- конфликт"))))),y.createElement(O.a,null),y.createElement(L.A,{threshlold:1e3,onReached:t.getItems},y.createElement(L.s,{felxGrow:!0,loading:t.loading},y.createElement(Ie,{personalSales:t,products:n}),y.createElement(L.s,{loading:t.loadingMore,overlay:!1,variant:"single"})),y.createElement(ye,{products:n,personalSales:t})))}}]),t}(y.Component))||i)||i)||i)||i,ke=function(e){function t(){return p()(this,t),g()(this,v()(t).apply(this,arguments))}return S()(t,e),f()(t,[{key:"render",value:function(){return y.createElement(Ce,null)}}]),t}(y.Component);t.default=ke}}]);