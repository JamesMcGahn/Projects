<?php
/*
    Template Name: Legislation
 */

get_header();

$url  = get_field('rss_feed_link');



// Thanks for Eric Ma for the below
// modified from the original code == check out the below link for the original code
// Check http://www.systutorials.com/136102/a-php-function-for-fetching-rss-feed-and-outputing-feed-items-as-html/ for description
// RSS to HTML
/*
    $tiem_cnt: max number of feed items to be displayed
    $max_words: max number of words (not real words, HTML words)
    if <= 0: no limitation, if > 0 display at most $max_words words
 */



function get_rss_feed_as_html($feed_url, $max_item_cnt = 10, $show_date = true, $show_description = true, $max_words = 0, $cache_timeout = 7200, $cache_prefix = "/tmp/rss2html-")
{
    $result = "";
    // get feeds and parse items
    $rss = new DOMDocument();
    $cache_file = $cache_prefix . md5($feed_url);
    // load from file or load content
    if ($cache_timeout > 0 &&
        is_file($cache_file) &&
        (filemtime($cache_file) + $cache_timeout > time())) {
            $rss->load($cache_file);
    } else {
        $rss->load($feed_url);
        if ($cache_timeout > 0) {
            $rss->save($cache_file);
        }
    }
    $feed = array();
    foreach ($rss->getElementsByTagName('item') as $node) {
        $item = array (
            'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
            'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,
            'content' => $node->getElementsByTagName('description')->item(0)->nodeValue,
            'link' => $node->getElementsByTagName('link')->item(0)->nodeValue,
            'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
        );
        $content = $node->getElementsByTagName('encoded'); // <content:encoded>
        if ($content->length > 0) {
            $item['content'] = $content->item(0)->nodeValue;
        }
        array_push($feed, $item);
    }
    // real good count
    if ($max_item_cnt > count($feed)) {
        $max_item_cnt = count($feed);
    }
    $result .= '';
    for ($x=0;$x<$max_item_cnt;$x++) {
        $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
        $titleLink = str_replace('NJ ', '', $title);
        $link = $feed[$x]['link'];
        $result .= '<div class="col"><div class="card h-100"><div class="card-body">';
        $result .= '<div class="card-title legifeedtitle"><strong><a href="https://www.njleg.state.nj.us/bills/BillView.asp?BillNumber='.$titleLink.'"  title="'.$title.'"  target="_blank">'.$title.'</a></strong></div>';


        
        if ($show_description) {
            $description = $feed[$x]['desc'];
            $content = $feed[$x]['content'];
            // find the img
            $has_image = preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $content, $image);
            // no html tags
            $description = strip_tags(preg_replace('/(<(script|style)\b[^>]*>).*?(<\/\2>)/s', "$1$3", $description), '');
            // whether cut by number of words
            if ($max_words > 0) {
                $arr = explode(' ', $description);
                if ($max_words < count($arr)) {
                    $description = '';
                    $w_cnt = 0;
                    foreach($arr as $w) {
                        $description .= $w . ' ';
                        $w_cnt = $w_cnt + 1;
                        if ($w_cnt == $max_words) {
                            break;
                        }
                    }
                    $description .= " ...";
                }
            }
            // add img if it exists
            if ($has_image == 1) {
                $description = '<img class="feed-item-image" src="' . $image['src'] . '" />' . $description;
            }
            $result .= '<p class="card-text">' . $description;
            $result .= ' </br> <a href="https://www.njleg.state.nj.us/bills/BillView.asp?BillNumber='.$titleLink.'" title="'.$title.'" target="_blank">Continue Reading &raquo;</a>'.'</p>';


            if ($show_date) {
                $date = date('l F d, Y', strtotime($feed[$x]['date']));
                $result .= '</div><div class="card-footer"><small class="feed-date"><em>Last Action: '.$date.'</em></small></div>';
            }

        }
        $result .= '</div></div>';
    }
    $result .= '';
    return $result;
}

function output_rss_feed($feed_url, $max_item_cnt = 50, $show_date = true, $show_description = true, $max_words = 0)
{
    echo get_rss_feed_as_html($feed_url, $max_item_cnt, $show_date, $show_description, $max_words);
}
?>



<div id="home" class="container-fluid">
<div class="row headerImage align-items-center">
    <div class="col-12 headerImageText">
                <h1 class="text-center"><?php the_title(); ?></h1>
            </div>
    </div>
<div class="container-fluid legi">
<div class="row">
<div class="col-md-2"></div>
<div id="legicontainer_text" class="col-md-8 col-sm-12 ">
    <div class="card legiIntroContent">
        <?php the_content(); ?>
    </div>
</div>
<div class="col-md-2"></div>
</div>
    <div class="row">
        <div class="col-md-1"></div>
        <div id="legicontainer" class="col-md-10 col-sm-12 ">
            <div class="row legicontent">
                <div class="row row-cols-12 row-cols-md-2 row-cols-sm-1 g-4">
                <?php output_rss_feed($url)  ?>
                    </div>
                <div class="row">
                    <div class="col-12"> 
                </div>       
                </div>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>
</div>

</div>


<?php get_footer(); ?>