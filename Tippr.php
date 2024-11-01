<?
/*
Plugin Name: Tooltippr
Plugin URI: http://adityamukherjee.com/geekaholic
Description: Adds style-able tooltips to links in your posts.
Author: Aditya Mukherjee
Version: 0.9.8
*/
//===============================================
$tooltippr_body = "the_body,body,post-content,entry-content";

function appendTooltippr() {
	$folder = get_bloginfo('wpurl')."/wp-content/plugins/tooltippr";
	
	echo "<script src='$folder/jquery.js' type='text/javascript'></script>\n".
	"<script src='$folder/tooltippr.js' type='text/javascript'></script>\n".
	"<link rel='stylesheet' href='$folder/tooltippr.css' type='text/css' media='screen' charset='utf-8'/>\n";
}

function doTippr() {
	global $tooltippr_body;
	echo <<<script
		\n<script type="text/javascript" charset="utf-8">\n
			addTips('$tooltippr_body');
		\n</script>\n
script;
}

add_action('wp_head', 'appendTooltippr');
add_action('wp_footer', 'doTippr');

?>