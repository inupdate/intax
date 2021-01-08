/*!========================================================================
* File: bootstrap-iconpicker.js v1.9.0 by @victor-valencia
* https://victor-valencia.github.com/bootstrap-iconpicker
* ========================================================================
* Copyright 2013-2017 Victor Valencia Rico.
* Licensed under MIT license.
* https://github.com/victor-valencia/bootstrap-iconpicker/blob/master/LICENSE
* ========================================================================
*/
!function(t){"use strict";var e=function(o,s){this.$element=t(o),this.options=t.extend({},e.DEFAULTS,this.$element.data()),this.options=t.extend({},this.options,s)};e.VERSION="1.9.0",e.ICONSET_EMPTY={iconClass:"",iconClassFix:"",icons:[]},e.ICONSET={_custom:null,elusiveicon:t.iconset_elusiveicon||e.ICONSET_EMPTY,flagicon:t.iconset_flagicon||e.ICONSET_EMPTY,fontawesome:t.iconset_fontawesome||e.ICONSET_EMPTY,glyphicon:t.iconset_glyphicon||e.ICONSET_EMPTY,ionicon:t.iconset_ionicon||e.ICONSET_EMPTY,mapicon:t.iconset_mapicon||e.ICONSET_EMPTY,materialdesign:t.iconset_materialdesign||e.ICONSET_EMPTY,octicon:t.iconset_octicon||e.ICONSET_EMPTY,typicon:t.iconset_typicon||e.ICONSET_EMPTY,weathericon:t.iconset_weathericon||e.ICONSET_EMPTY},e.DEFAULTS={align:"center",arrowClass:"btn-primary",arrowNextIconClass:"glyphicon glyphicon-arrow-right",arrowPrevIconClass:"glyphicon glyphicon-arrow-left",cols:4,icon:"",iconset:"glyphicon",iconsetVersion:"lastest",header:!0,labelHeader:"{0} / {1}",footer:!0,labelFooter:"{0} - {1} of {2}",placement:"bottom",rows:4,search:!0,searchText:"Search icon",selectedClass:"btn-warning",unselectedClass:"btn-default"},e.prototype.bindEvents=function(){var e=this.options,o=this;e.table.find(".btn-previous, .btn-next").off("click").on("click",(function(s){if(s.preventDefault(),!t(this).hasClass("disabled")){var n=parseInt(t(this).val(),10);o.changeList(e.page+n)}})),e.table.find(".btn-icon").off("click").on("click",(function(s){s.preventDefault(),o.select(t(this).val()),!1===e.inline?o.$element.popover("destroy"):e.table.find("i."+t(this).val()).parent().addClass(e.selectedClass)})),e.table.find(".search-control").off("keyup").on("keyup",(function(){o.changeList(1)}))},e.prototype.changeList=function(t){this.filterIcons(),this.updateLabels(t),this.updateIcons(t),this.options.page=t,this.bindEvents()},e.prototype.filterIcons=function(){var o=this.options,s=o.table.find(".search-control").val(),n=[];if("lastest"!=o.iconsetVersion&&void 0!==e.ICONSET[o.iconset].allVersions?t.each(e.ICONSET[o.iconset].allVersions,(function(t,e){o.iconsetVersion==e.version&&(n=e.icons)})):n=e.ICONSET[o.iconset].icons,""===s)o.icons=n;else{var i=[];t.each(n,(function(t,e){e.toLowerCase().indexOf(s)>-1&&i.push(e)})),o.icons=i}},e.prototype.removeAddClass=function(t,e,o){return this.options.table.find(t).removeClass(e).addClass(o),o},e.prototype.reset=function(){this.updatePicker(),this.changeList(1)},e.prototype.select=function(e){var o=this.options,s=this.$element;o.selected=t.inArray(e.replace(o.iconClassFix,""),o.icons),-1===o.selected&&(o.selected=0,e=o.iconClassFix+o.icons[o.selected]),""!==e&&o.selected>=0&&(o.icon=e,!1===o.inline&&(s.find("input").val(e),s.find("i").attr("class","").addClass(o.iconClass).addClass(e)),e===o.iconClassFix?s.trigger({type:"change",icon:"empty"}):(s.trigger({type:"change",icon:e}),s.find("input").val(e)),o.table.find("button."+o.selectedClass).removeClass(o.selectedClass))},e.prototype.switchPage=function(e){var o=this.options;if(o.selected=t.inArray(e.replace(o.iconClassFix,""),o.icons),o.selected>=0){var s=Math.ceil((o.selected+1)/this.totalIconsPerPage());this.changeList(s)}""===e?o.table.find("i."+o.iconClassFix).parent().addClass(o.selectedClass):o.table.find("i."+e).parent().addClass(o.selectedClass)},e.prototype.totalPages=function(){return Math.ceil(this.totalIcons()/this.totalIconsPerPage())},e.prototype.totalIcons=function(){return this.options.icons.length},e.prototype.totalIconsPerPage=function(){return 0===this.options.rows?this.options.icons.length:this.options.cols*this.options.rows},e.prototype.updateArrows=function(t){var e=this.options,o=this.totalPages();1===t?e.table.find(".btn-previous").addClass("disabled"):e.table.find(".btn-previous").removeClass("disabled"),t===o||0===o?e.table.find(".btn-next").addClass("disabled"):e.table.find(".btn-next").removeClass("disabled")},e.prototype.updateIcons=function(e){var o=this.options,s=o.table.find("tbody").empty(),n=(e-1)*this.totalIconsPerPage(),i=o.rows;0===o.rows&&(i=o.icons.length);for(var a=0;a<i;a++){for(var c=t("<tr></tr>"),r=0;r<o.cols;r++){var l=n+a*o.cols+r,p=t('<button class="btn '+o.unselectedClass+' btn-icon"></button>').hide();if(l<o.icons.length){var d=o.iconClassFix+o.icons[l];p.val(d).attr("title",d).append('<i class="'+o.iconClass+" "+d+'"></i>').show(),o.icon===d&&p.addClass(o.selectedClass).addClass("btn-icon-selected")}c.append(t("<td></td>").append(p))}s.append(c)}},e.prototype.updateIconsCount=function(){var t=this.options;if(!0===t.footer){var e=["<tr>",'   <td colspan="'+t.cols+'" class="text-center">','       <span class="icons-count"></span>',"   </td>","</tr>"];t.table.find("tfoot").empty().append(e.join(""))}},e.prototype.updateLabels=function(t){var e=this.options,o=this.totalIcons(),s=this.totalPages();e.table.find(".page-count").html(e.labelHeader.replace("{0}",0===s?0:t).replace("{1}",s));var n=(t-1)*this.totalIconsPerPage(),i=t*this.totalIconsPerPage();e.table.find(".icons-count").html(e.labelFooter.replace("{0}",o?n+1:0).replace("{1}",i<o?i:o).replace("{2}",o)),this.updateArrows(t)},e.prototype.updatePagesCount=function(){var e=this.options;if(!0===e.header){for(var o=t("<tr></tr>"),s=0;s<e.cols;s++){var n=t('<td class="text-center"></td>');if(0===s||s===e.cols-1){var i=['<button class="btn btn-arrow '+(0===s?"btn-previous":"btn-next")+" "+e.arrowClass+'" value="'+(0===s?-1:1)+'">','<span class="'+(0===s?e.arrowPrevIconClass:e.arrowNextIconClass)+'"></span>',"</button>"];n.append(i.join("")),o.append(n)}else 0===o.find(".page-count").length&&(n.attr("colspan",e.cols-2).append('<span class="page-count"></span>'),o.append(n))}e.table.find("thead").empty().append(o)}},e.prototype.updatePicker=function(){var t=this.options;if(t.cols<4)throw"Iconpicker => The number of columns must be greater than or equal to 4. [option.cols = "+t.cols+"]";if(t.rows<0)throw"Iconpicker => The number of rows must be greater than or equal to 0. [option.rows = "+t.rows+"]";this.updatePagesCount(),this.updateSearch(),this.updateIconsCount()},e.prototype.updateSearch=function(){var e=this.options,o=["<tr>",'   <td colspan="'+e.cols+'">','       <input type="text" class="form-control search-control" style="width: '+39*e.cols+'px;" placeholder="'+e.searchText+'">',"   </td>","</tr>"];o=t(o.join("")),!0===e.search?o.show():o.hide(),e.table.find("thead").append(o)},e.prototype.setAlign=function(t){this.$element.removeClass(this.options.align).addClass(t),this.options.align=t},e.prototype.setArrowClass=function(t){this.options.arrowClass=this.removeAddClass(".btn-arrow",this.options.arrowClass,t)},e.prototype.setArrowNextIconClass=function(t){this.options.arrowNextIconClass=this.removeAddClass(".btn-next > span",this.options.arrowNextIconClass,t)},e.prototype.setArrowPrevIconClass=function(t){this.options.arrowPrevIconClass=this.removeAddClass(".btn-previous > span",this.options.arrowPrevIconClass,t)},e.prototype.setCols=function(t){this.options.cols=t,this.reset()},e.prototype.setFooter=function(t){var e=this.options.table.find("tfoot");!0===t?e.show():e.hide(),this.options.footer=t},e.prototype.setHeader=function(t){var e=this.options.table.find("thead");!0===t?e.show():e.hide(),this.options.header=t},e.prototype.setIcon=function(t){this.select(t)},e.prototype.setIconset=function(o){var s=this.options;t.isPlainObject(o)?(e.ICONSET._custom=t.extend(e.ICONSET_EMPTY,o),s.iconset="_custom"):e.ICONSET.hasOwnProperty(o)?s.iconset=o:s.iconset=e.DEFAULTS.iconset,s=t.extend(s,e.ICONSET[s.iconset]),this.reset(),this.select(s.icon)},e.prototype.setLabelHeader=function(t){this.options.labelHeader=t,this.updateLabels(this.options.page)},e.prototype.setLabelFooter=function(t){this.options.labelFooter=t,this.updateLabels(this.options.page)},e.prototype.setPlacement=function(t){this.options.placement=t},e.prototype.setRows=function(t){this.options.rows=t,this.reset()},e.prototype.setSearch=function(t){var e=this.options.table.find(".search-control");!0===t?e.show():e.hide(),e.val(""),this.changeList(1),this.options.search=t},e.prototype.setSearchText=function(t){this.options.table.find(".search-control").attr("placeholder",t),this.options.searchText=t},e.prototype.setSelectedClass=function(t){this.options.selectedClass=this.removeAddClass(".btn-icon-selected",this.options.selectedClass,t)},e.prototype.setUnselectedClass=function(t){this.options.unselectedClass=this.removeAddClass(".btn-icon",this.options.unselectedClass,t)};var o=t.fn.iconpicker;t.fn.iconpicker=function(o,s){return this.each((function(){var n=t(this),i=n.data("bs.iconpicker"),a="object"==typeof o&&o;if(i||n.data("bs.iconpicker",i=new e(this,a)),"string"==typeof o){if(void 0===i[o])throw'Iconpicker => The "'+o+'" method does not exists.';i[o](s)}else{var c=i.options;c=t.extend(c,{inline:!1,page:1,selected:-1,table:t('<table class="table-icons"><thead></thead><tbody></tbody><tfoot></tfoot></table>')});var r=void 0!==n.attr("name")?'name="'+n.attr("name")+'"':"";"BUTTON"===n.prop("tagName")?(n.empty().append("<i></i>").append('<input type="hidden" '+r+"></input>").append('<span class="caret"></span>').addClass("iconpicker"),i.setIconset(c.iconset),n.on("click",(function(t){t.preventDefault(),n.popover({animation:!1,trigger:"manual",html:!0,content:c.table,container:"body",placement:c.placement}).on("shown.bs.popover",(function(){i.switchPage(c.icon),i.bindEvents()})),n.data("bs.popover").tip().addClass("iconpicker-popover"),n.popover("show")}))):(c.inline=!0,i.setIconset(c.iconset),n.empty().append('<input type="hidden" '+r+"></input>").append(c.table).addClass("iconpicker").addClass(c.align),i.switchPage(c.icon),i.bindEvents())}}))},t.fn.iconpicker.Constructor=e,t.fn.iconpicker.noConflict=function(){return t.fn.iconpicker=o,this},t(document).on("click","body",(function(e){t(".iconpicker").each((function(){t(this).is(e.target)||0!==t(this).has(e.target).length||0!==t(".popover").has(e.target).length||t(this).popover("destroy")}))})),t('button[role="iconpicker"],div[role="iconpicker"]').iconpicker()}(jQuery);