(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(a,e,t){a.exports={header:"Favourites_header__2qA3Y",headerText:"Favourites_headerText__34Ngg",cards:"Favourites_cards__2iWEw",nocharAlert:"Favourites_nocharAlert__2x4IP"}},12:function(a,e,t){a.exports={character:"FavCard_character__2XI_j",info:"FavCard_info__20I8h",name:"FavCard_name__wshRt",card:"FavCard_card__3za8Z",likeIco:"FavCard_likeIco__1OgXv"}},13:function(a,e,t){a.exports={nav:"Nav_nav__15231",list:"Nav_list__3Q26c",link:"Nav_link__3JINS"}},23:function(a,e,t){a.exports={pagination:"Pagination_pagination__2YxUL",active:"Pagination_active__3mFTg",arrowRight:"Pagination_arrowRight__2nTCk",arrowLeft:"Pagination_arrowLeft__Bf_mW",pagination__arrow:"Pagination_pagination__arrow__2x450"}},4:function(a,e,t){a.exports={header:"Characters_header__t7vDj",infoHeader:"Characters_infoHeader__O2PSp",headerText:"Characters_headerText__xiORd",cards:"Characters_cards__3Umwj",cardInfo:"Characters_cardInfo__1F7cq",infoImage:"Characters_infoImage__Fnrix",info:"Characters_info__2OLPg",name:"Characters_name__3lW6Q",desc:"Characters_desc__3J3fy"}},51:function(a,e,t){},52:function(a,e,t){},82:function(a,e,t){"use strict";t.r(e);var r=t(1),c=t.n(r),n=t(26),s=t.n(n),i=(t(51),t(2)),o=(t(52),t(15)),h=t(16),u=t(20),d=t(18),l=t(17),j=t.p+"static/media/preloader.52c7c6d4.svg",p=t(0),g=function(){return Object(p.jsx)("div",{style:{gridColumn:"3",margin:"200px auto"},children:Object(p.jsx)("img",{src:j,alt:""})})},b=t(19),f=t(23),v=t.n(f),O=function(a){var e=a.currentPage,t=a.getCharacters,c=a.totalCharactersCount,n=Object(r.useState)(e),s=Object(b.a)(n,2),i=s[0],o=s[1],h=c,u=Math.ceil(h/10),d=function(a){var e=+a.target.innerHTML;o(e),t(e)},l=[i-2,i-1,i,i+1,i+2].filter((function(a){return a>0&&a<u+1})),j=l[0]===i&&u>4,g=l[l.length-1]===i&&u>4,f=l[1]===i&&u>4,O=l[l.length-2]===i&&u>4||l[l.length-1]===i&&4===u;j&&l.push(i+3,i+4),f&&l.push(i+3),g&&l.unshift(i-4,i-3),O&&l.unshift(i-3);return Object(r.useEffect)((function(){o(e)}),[e]),Object(p.jsxs)("ul",{className:v.a.pagination,children:[1!==i&&Object(p.jsx)("li",{className:v.a.arrowLeft,onClick:function(){o(i-1),t(i-1)},children:"<"}),l.map((function(a){return a===i?Object(p.jsx)("li",{onClick:d,className:v.a.active,children:a},a):Object(p.jsx)("li",{onClick:d,children:a},a)})),i!==u&&Object(p.jsx)("li",{className:v.a.arrowRight,onClick:function(){o(i+1),t(i+1)},children:">"})]})},C=t(9),m=t.n(C),_=t.p+"static/media/like-ico.665ede1a.svg",x=t.p+"static/media/like-ico-clicked.4c4725c1.svg",k=t(7),N=function(a){var e=Object(r.useState)("+"===localStorage.getItem(a.id)),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(p.jsx)("div",{className:m.a.card,children:Object(p.jsxs)("div",{className:m.a.character,children:[Object(p.jsx)(k.b,{to:"characters/".concat(a.id),children:Object(p.jsx)("img",{className:m.a.image,src:"https://starwars-visualguide.com/assets/img/characters/".concat(a.id,".jpg"),alt:"".concat(a.name)})}),Object(p.jsxs)("div",{className:m.a.info,children:[Object(p.jsx)(k.b,{to:"characters/".concat(a.id),className:m.a.name,children:a.name}),Object(p.jsx)("img",{src:c?x:_,className:m.a.likeIco,alt:"",onClick:function(e){c?(a.toggleLikeThunk(!0,a.id),n(!1),e.target.setAttribute("src","".concat(_))):(a.toggleLikeThunk(!1,a.id),n(!0),e.target.setAttribute("src","".concat(x)))}})]})]})})},T=t(4),P=t.n(T),L=function(a){return Object(p.jsxs)("div",{className:P.a.characters,children:[Object(p.jsxs)("div",{className:P.a.header,children:[Object(p.jsx)("div",{className:P.a.headerText,children:"Characters"}),Object(p.jsx)(O,{currentPage:a.currentPage,getCharacters:a.getCharactersThunk,totalCharactersCount:a.totalCharactersCount})]}),a.isLoading?Object(p.jsxs)("div",{className:P.a.cards,children:[" ",Object(p.jsx)(g,{})," "]}):Object(p.jsx)("div",{className:P.a.cards,children:void 0!==a.characters&&a.characters.map((function(e){return Object(p.jsx)(N,{name:e.name,id:e.url.replace(/\D/g,""),toggleLikeThunk:a.toggleLikeThunk},e.url.replace(/\D/g,""))}))})]})},I=t(10),F=t.n(I),y=t(28),w=t(46),A=t(3),E=t(44).create({baseURL:"https://swapi.dev/api/"}),R=function(a){return E.get("people/?page=".concat(a)).then((function(a){return a.data}))},S=function(a){return E.get("people/".concat(a)).then((function(a){return a.data}))},D="SET_CHARACTERS",H="SET_CURRENT_PAGE",G="GET_FAV_CHARACTERS",M="TOGGLE_IS_LOADING",Y="DELETE_FAV_CHARACTER",U="SET_TOTAL_CHARACTERS_COUNT",J="SET_FAV_CURRENT_PAGE",V="TOGGLE_IS_NO_CHAR",B={characters:[],currentPage:1,favCharacters:[],isLoading:!1,totalCharactersCount:0,favCurrentPage:1,isNoChar:!1},W=function(){for(var a=[],e=0,t=Object.keys(localStorage);e<t.length;e++){var r=t[e];a.push(+r)}return a.sort((function(a,e){return a>e?1:a===e?0:a<e?-1:void 0}))},q=function(a){return{type:D,characters:a}},z=function(a){return{type:H,currentPage:a}},Q=function(a){return{type:G,favCharacters:a}},X=function(a){return{type:M,isLoading:a}},Z=function(a){return{type:Y,cardId:a}},K=function(a){return{type:U,count:a}},$=function(a){return{type:J,favCurrentPage:a}},aa=function(a){return{type:V,condition:a}},ea=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return Object(A.a)(Object(A.a)({},a),{},{characters:e.characters});case H:return Object(A.a)(Object(A.a)({},a),{},{currentPage:e.currentPage});case G:return Object(A.a)(Object(A.a)({},a),{},{favCharacters:e.favCharacters});case J:return Object(A.a)(Object(A.a)({},a),{},{favCurrentPage:e.favCurrentPage});case M:return Object(A.a)(Object(A.a)({},a),{},{isLoading:e.isLoading});case Y:return Object(A.a)(Object(A.a)({},a),{},{favCharacters:Object(w.a)(a.favCharacters.filter((function(a){return a.url.replace(/\D/g,"")!==e.cardId})))});case U:return Object(A.a)(Object(A.a)({},a),{},{totalCharactersCount:e.count});case V:return Object(A.a)(Object(A.a)({},a),{},{isNoChar:e.condition});default:return a}},ta=function(a){Object(u.a)(t,a);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){var a=this,e=this.props.characters.filter((function(e){return e.url.replace(/\D/g,"")===a.props.cardId}))[0];return Object(p.jsxs)("div",{className:P.a.characters,children:[Object(p.jsxs)("div",{className:P.a.infoHeader,children:[this.props.favCurrentPage?Object(p.jsx)("div",{className:P.a.headerText,children:"Favourites "}):Object(p.jsx)("div",{className:P.a.headerText,children:"Characters "}),void 0!==e&&Object(p.jsxs)("div",{className:P.a.headerText,children:["/ ".concat(e.name)," "]})]}),this.props.isLoading?Object(p.jsxs)("div",{className:P.a.cards,children:[" ",Object(p.jsx)(g,{})," "]}):Object(p.jsxs)("div",{className:P.a.cardInfo,children:[Object(p.jsx)("img",{className:P.a.infoImage,src:"https://starwars-visualguide.com/assets/img/characters/".concat(this.props.cardId,".jpg"),alt:"".concat(this.props.name)}),Object(p.jsxs)("div",{className:P.a.info,children:[Object(p.jsx)("p",{className:P.a.name,children:void 0!==e&&e.name}),Object(p.jsxs)("div",{className:P.a.desc,children:[Object(p.jsx)("p",{children:"Birth Year: ".concat(void 0!==e&&e.birth_year)}),Object(p.jsx)("p",{children:"Height: ".concat(void 0!==e&&e.height)}),Object(p.jsx)("p",{children:"Mass: ".concat(void 0!==e&&e.mass)}),Object(p.jsx)("p",{children:"Gender: ".concat(void 0!==e&&e.gender)}),Object(p.jsx)("p",{children:"Hair Color: ".concat(void 0!==e&&e.hair_color)}),Object(p.jsx)("p",{children:"Skin Color: ".concat(void 0!==e&&e.skin_color)}),Object(p.jsx)("p",{children:"Eye Color: ".concat(void 0!==e&&e.eye_color)})]})]})]})]})}}]),t}(c.a.Component),ra=ta,ca=function(a){Object(u.a)(t,a);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getCharactersThunk(this.props.currentPage)}},{key:"render",value:function(){var a=this;return Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/characters/".concat(this.props.match.params.cardId),render:function(){return Object(p.jsx)(ra,{characters:a.props.characters,isLoading:a.props.isLoading,cardId:a.props.match.params.cardId})}}),Object(p.jsx)(i.b,{path:"/characters",render:function(){return Object(p.jsx)(L,{characters:a.props.characters,currentPage:a.props.currentPage,getCharactersThunk:a.props.getCharactersThunk,toggleLikeThunk:a.props.toggleLikeThunk,totalCharactersCount:a.props.totalCharactersCount,isLoading:a.props.isLoading})}})]})}}]),t}(c.a.Component),na=Object(i.g)(ca),sa=Object(l.b)((function(a){return{characters:a.charactersPage.characters,currentPage:a.charactersPage.currentPage,isLoading:a.charactersPage.isLoading,totalCharactersCount:a.charactersPage.totalCharactersCount}}),{getCharactersThunk:function(a){return function(){var e=Object(y.a)(F.a.mark((function e(t){var r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0)),t(z(a)),e.next=4,R(a);case 4:r=e.sent,t(K(r.count)),t(q(r.results)),t(X(!1));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},toggleLikeThunk:function(a,e){return function(t){a?localStorage.removeItem(e):localStorage.setItem(e,"+")}}})(na),ia=t(11),oa=t.n(ia),ha=t(12),ua=t.n(ha),da=t.p+"static/media/cross-ico.957b1848.svg",la=function(a){return Object(p.jsx)("div",{className:ua.a.card,children:Object(p.jsxs)("div",{className:ua.a.character,children:[Object(p.jsx)(k.b,{to:"favourites/".concat(a.id),children:Object(p.jsx)("img",{className:ua.a.image,src:"https://starwars-visualguide.com/assets/img/characters/".concat(a.id,".jpg"),alt:"".concat(a.name)})}),Object(p.jsxs)("div",{className:ua.a.info,children:[Object(p.jsx)(k.b,{className:ua.a.name,to:"favourites/".concat(a.id),children:a.name}),Object(p.jsx)("img",{src:da,className:ua.a.likeIco,alt:"",onClick:function(){a.deleteFavCharacterThunk(a.id,a.currentPage)}})]})]})})},ja=function(a){var e=Object(r.useState)(a.isNoChar),t=Object(b.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){n(a.isNoChar)}),[a.isNoChar]),Object(p.jsxs)("div",{className:oa.a.favourites,children:[Object(p.jsxs)("div",{className:oa.a.header,children:[Object(p.jsx)("div",{className:oa.a.headerText,children:"Favourites"}),!c&&Object(p.jsx)(O,{getCharacters:a.getFavCharactersThunk,currentPage:a.currentPage,totalCharactersCount:a.totalCharactersCount})]}),a.isLoading&&!a.isNoChar?Object(p.jsxs)("div",{className:oa.a.cards,children:[" ",Object(p.jsx)(g,{})," "]}):Object(p.jsx)("div",{className:oa.a.cards,children:void 0!==a.favCharacters&&a.favCharacters.map((function(e){return Object(p.jsx)(la,{getFavCharactersThunk:a.getFavCharactersThunk,name:e.name,id:e.url.replace(/\D/g,""),deleteFavCharacterThunk:a.deleteFavCharacterThunk,currentPage:a.currentPage},e.url.replace(/\D/g,""))}))}),c&&Object(p.jsx)("div",{className:oa.a.nocharAlert,children:"You don't have favourite characters. You can add character to your favourite list on the characters page. "})]})},pa=function(a){Object(u.a)(t,a);var e=Object(d.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getFavCharactersThunk(this.props.favCurrentPage)}},{key:"render",value:function(){var a=this;return Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/favourites/".concat(this.props.match.params.cardId),render:function(){return Object(p.jsx)(ra,{characters:a.props.favCharacters,isLoading:a.props.isLoading,cardId:a.props.match.params.cardId,favCurrentPage:a.props.favCurrentPage})}}),Object(p.jsx)(i.b,{path:"/favourites",render:function(){return Object(p.jsx)(ja,{getFavCharactersThunk:a.props.getFavCharactersThunk,favCharacters:a.props.favCharacters,isLoading:a.props.isLoading,deleteFavCharacterThunk:a.props.deleteFavCharacterThunk,currentPage:a.props.favCurrentPage,totalCharactersCount:a.props.totalCharactersCount,isNoChar:a.props.isNoChar})}})]})}}]),t}(c.a.Component),ga=Object(i.g)(pa),ba=Object(l.b)((function(a){return{favCharacters:a.charactersPage.favCharacters,isLoading:a.charactersPage.isLoading,favCurrentPage:a.charactersPage.favCurrentPage,totalCharactersCount:a.charactersPage.totalCharactersCount,isNoChar:a.charactersPage.isNoChar}}),{getFavCharactersThunk:function(a){return function(){var e=Object(y.a)(F.a.mark((function e(t){var r,c,n,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(X(!0)),t($(a)),r=W(),t(K(r.length)),0===r.length?t(aa(!0)):t(aa(!1)),c=[],n=10*a-10;case 7:if(!(n<=10*a-1)){e.next=16;break}if(void 0===r[n]){e.next=13;break}return e.next=11,S(r[n]);case 11:s=e.sent,c.push(s);case 13:n++,e.next=7;break;case 16:t(Q(c)),t(X(!1));case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},deleteFavCharacterThunk:function(a,e){return function(){var t=Object(y.a)(F.a.mark((function t(r){var c,n,s,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem(a),r(Z(a)),c=W(),r(K(c.length)),0===c.length?r(aa(!0)):r(aa(!1)),e>Math.ceil(c.length/10)&&1!==e&&(e-=1),n=[],s=10*e-10;case 8:if(!(s<=10*e-1)){t.next=17;break}if(void 0===c[s]){t.next=14;break}return t.next=12,S(c[s]);case 12:i=t.sent,n.push(i);case 14:s++,t.next=8;break;case 17:r($(e)),r(Q(n));case 19:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}()}})(ga),fa=t(13),va=t.n(fa),Oa=function(){return Object(p.jsx)("nav",{className:va.a.nav,children:Object(p.jsxs)("ul",{className:va.a.list,children:[Object(p.jsx)("li",{className:va.a.item,children:Object(p.jsx)(k.b,{to:"/characters",className:va.a.link,children:"Characters"})}),Object(p.jsx)("li",{className:va.a.item,children:Object(p.jsx)(k.b,{to:"/favourites",className:va.a.link,children:"Favourites"})})]})})};var Ca=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(Oa,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsx)(i.b,{path:"/characters/:cardId?",render:function(){return Object(p.jsx)(sa,{})}}),Object(p.jsx)(i.b,{path:"/favourites/:cardId?",render:function(){return Object(p.jsx)(ba,{})}}),Object(p.jsx)(i.a,{from:"/",to:"/characters"})]})]})},ma=t(29),_a=t(45),xa=Object(ma.b)({charactersPage:ea}),ka=Object(ma.c)(xa,Object(ma.a)(_a.a));s.a.render(Object(p.jsx)(l.a,{store:ka,children:Object(p.jsx)(k.a,{children:Object(p.jsx)(Ca,{})})}),document.getElementById("root"))},9:function(a,e,t){a.exports={character:"Card_character__zPeuD",info:"Card_info__1Y1oY",name:"Card_name__2VLlZ",card:"Card_card__3RrOG",likeIco:"Card_likeIco__2MAbd"}}},[[82,1,2]]]);
//# sourceMappingURL=main.79e7f3b2.chunk.js.map