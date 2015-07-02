define("ace/theme/girly",
  ["require","exports","module","ace/lib/dom"],
  function(e,t,n){t.isDark=!0, isGirl=true, t.cssClass="ace-girly",t.cssText=".ace-girly .ace_text, .ace-girly .ace_text-layer{ color: #6C5851}.ace-girly .ace_attribute-name{color: #35A1D2}.ace_content{ background: #FFFFEE}.ace-girly .ace_gutter {background: #FFFFE3;color: #ECC0B0}.ace-girly .ace-girly {background-color: #FFFDE5;color: #552D15}.ace-girly .ace_cursor {color: #35A1D2}.ace-girly .ace_marker-layer .ace_selection {background: rgba(255,5,70, 0.10)}.ace-girly .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-girly .ace_marker-layer .ace_active-line {background: rgba(36, 99, 180, 0.12)}.ace-girly .ace_gutter-active-line {background-color: #FF466A}.ace-girly .ace_invisible {color: rgba(75, 75, 126, 0.50)}.ace-girly .ace_keyword{color: #FF8600}.ace-girly .ace_meta {color: #FF466A}.ace-girly .ace_constant,.ace-girly .ace_constant.ace_character,.ace-girly .ace_constant.ace_character.ace_escape,.ace-girly .ace_constant.ace_other {color: #35A1D2}.ace-girly .ace_invalid.ace_illegal {text-decoration: underline;font-style: italic;color: #F8F8F8;background-color: #B52A1D}.ace-girly .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #B52A1D}.ace-girly .ace_support {color: #FF8600}.ace-girly .ace_support.ace_constant {color: #FF466A}.ace-girly .ace_fold {background-color: #794938;border-color: #080808}.ace-girly .ace_list,.ace-girly .ace_markup.ace_list,.ace-girly .ace_support.ace_function {color: #693A17}.ace-girly .ace_storage {font-style: italic;color: #A71D5D}.ace-girly .ace_string {color: #35A1D2}.ace-girly .ace_string.ace_regexp {color: #CF5628}.ace-girly .ace_comment {color: #ECC0B0}.ace-girly .ace_heading,.ace-girly .ace_markup.ace_heading {color: #19356D}.ace-girly .ace_variable {color: #234A97}";
var r=e("../lib/dom");
r.importCssString(t.cssText,t.cssClass)})