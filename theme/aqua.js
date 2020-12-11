ace.define("ace/theme/aqua",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-aqua";
exports.cssText = ".ace-aqua .ace_gutter-active-line {\
background-color: #7ca0b5;\
}\
.ace-aqua .ace_gutter-layer {\
    background-color: rgba(255,255,255,0.2);\
}\
.ace-aqua {\
color: #cecece;\
background-color: rgba(0,0,0,0);\
}\
.ace-aqua .ace_invisible {\
color: rgba(0,0,0,0);\
}\
.ace-aqua .ace_marker-layer .ace_selection {\
background: rgba(162, 202, 238, 0.75)\
}\
.ace-aqua.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #002240;\
}\
.ace-aqua .ace_keyword {\
color: #cecece;\
font-weight: bold;\
}\
.ace-aqua .ace_comment {\
font-style: italic;\
color: #928375;\
}\
.ace-aqua .ace-statement {\
color: red;\
}\
.ace-aqua .ace_variable {\
color: #84A598;\
}\
.ace-aqua .ace_variable.ace_language {\
color: #239DF9;\
}\
.ace-aqua .ace_constant {\
color: #239DF9;\
}\
.ace-aqua .ace_constant.ace_language {\
color: #239DF9;\
}\
.ace-aqua .ace_constant.ace_numeric {\
color: #239DF9;\
}\
.ace-aqua .ace_string {\
color: #B8BA37;\
}\
.ace-aqua .ace_support {\
color: #F9BC41;\
}\
.ace-aqua .ace_support.ace_function {\
color: #F84B3C;\
}\
.ace-aqua .ace_storage {\
color: #8FBF7F;\
}\
.ace-aqua .ace_keyword.ace_operator {\
color: #cecece;\
}\
.ace-aqua .ace_punctuation.ace_operator {\
color: #cecece;\
}\
.ace-aqua .ace_marker-layer .ace_active-line {\
background: #7ca0b5;\
}\
.ace-aqua .ace_marker-layer .ace_selected-word {\
border-radius: 4px;\
border: 8px solid #7ca0b5;\
}\
.ace-aqua .ace_print-margin {\
width: 0px;\
background: #3C3836;\
}\
.ace-aqua .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQUFD4z6Crq/sfAAuYAuYl+7lfAAAAAElFTkSuQmCC\") right repeat-y;\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);

});
