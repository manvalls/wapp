var e = exports;

// text

e['html'] =
e['htm'] =
e['shtml'] =    { "Content-Type": "text/html" };
e['css'] =      { "Content-Type": "text/css" };
e['xml'] =      { "Content-Type": "text/xml" };
e['mml'] =      { "Content-Type": "text/mathml" };
e['txt'] =      { "Content-Type": "text/plain" };
e['jad'] =      { "Content-Type": "text/vnd.sun.j2me.app-descriptor" };
e['wml'] =      { "Content-Type": "text/vnd.wap.wml" };
e['htc'] =      { "Content-Type": "text/x-component" };

// image

e['gif'] =      { "Content-Type": "image/gif" };
e['jpeg'] =
e['jpg'] =      { "Content-Type": "image/jpeg" };
e['png'] =      { "Content-Type": "image/png" };
e['tif'] =
e['tiff'] =     { "Content-Type": "image/tiff" };
e['wbmp'] =     { "Content-Type": "image/vnd.wap.wbmp" };
e['ico'] =      { "Content-Type": "image/x-icon" };
e['jng'] =      { "Content-Type": "image/x-jng" };
e['bmp'] =      { "Content-Type": "image/x-ms-bmp" };
e['svg'] =      { "Content-Type": "image/svg+xml" };
e['svgz'] =     { "Content-Type": "image/svg+xml", "Content-Encoding": "gzip" };
e['webp'] =     { "Content-Type": "image/webp" };

// audio

e['mid'] =
e['midi'] =
e['kar'] =      { "Content-Type": "audio/midi" };
e['mp3'] =      { "Content-Type": "audio/mpeg" };
e['ogg'] =      { "Content-Type": "audio/ogg" };
e['m4a'] =      { "Content-Type": "audio/x-m4a" };
e['ra'] =       { "Content-Type": "audio/x-realaudio" };

// video

e['3gpp'] =
e['3gp'] =      { "Content-Type": "video/3gpp" };
e['ts'] =       { "Content-Type": "video/mp2t" };
e['mp4'] =      { "Content-Type": "video/mp4" };
e['mpeg'] =
e['mpg'] =      { "Content-Type": "video/mpeg" };
e['mov'] =      { "Content-Type": "video/quicktime" };
e['webm'] =     { "Content-Type": "video/webm" };
e['flv'] =      { "Content-Type": "video/x-flv" };
e['m4v'] =      { "Content-Type": "video/x-m4v" };
e['mng'] =      { "Content-Type": "video/x-mng" };
e['asx'] =
e['asf'] =      { "Content-Type": "video/x-ms-asf" };
e['wmv'] =      { "Content-Type": "video/x-ms-wmv" };
e['avi'] =      { "Content-Type": "video/x-msvideo" };

// application

e['js'] =       { "Content-Type": "application/javascript" };
e['atom'] =     { "Content-Type": "application/atom+xml" };
e['rss'] =      { "Content-Type": "application/rss+xml" };
e['woff'] =     { "Content-Type": "application/font-woff" };
e['jar'] =
e['war'] =
e['ear'] =      { "Content-Type": "application/java-archive" };
e['json'] =     { "Content-Type": "application/json" };
e['hqx'] =      { "Content-Type": "application/mac-binhex40" };
e['doc'] =      { "Content-Type": "application/msword" };
e['pdf'] =      { "Content-Type": "application/pdf" };
e['ps'] =
e['eps'] =
e['ai'] =       { "Content-Type": "application/postscript" };
e['rtf'] =      { "Content-Type": "application/rtf" };
e['m3u8'] =     { "Content-Type": "application/vnd.apple.mpegurl" };
e['xls'] =      { "Content-Type": "application/vnd.ms-excel" };
e['eot'] =      { "Content-Type": "application/vnd.ms-fontobject" };
e['ppt'] =      { "Content-Type": "application/vnd.ms-powerpoint" };
e['wmlc'] =     { "Content-Type": "application/vnd.wap.wmlc" };
e['kml'] =      { "Content-Type": "application/vnd.google-earth.kml+xml" };
e['kmz'] =      { "Content-Type": "application/vnd.google-earth.kmz" };
e['7z'] =       { "Content-Type": "application/x-7z-compressed" };
e['cco'] =      { "Content-Type": "application/x-cocoa" };
e['jardiff'] =  { "Content-Type": "application/x-java-archive-diff" };
e['jnlp'] =     { "Content-Type": "application/x-java-jnlp-file" };
e['run'] =      { "Content-Type": "application/x-makeself" };
e['pl'] =
e['pm'] =       { "Content-Type": "application/x-perl" };
e['prc'] =
e['pdb'] =      { "Content-Type": "application/x-pilot" };
e['rar'] =      { "Content-Type": "application/x-rar-compressed" };
e['rpm'] =      { "Content-Type": "application/x-redhat-package-manager" };
e['sea'] =      { "Content-Type": "application/x-sea" };
e['swf'] =      { "Content-Type": "application/x-shockwave-flash" };
e['sit'] =      { "Content-Type": "application/x-stuffit" };
e['tcl'] =
e['tk'] =       { "Content-Type": "application/x-tcl" };
e['der'] =
e['pem'] =
e['crt'] =      { "Content-Type": "application/x-x509-ca-cert" };
e['xpi'] =      { "Content-Type": "application/x-xpinstall" };
e['xhtml'] =    { "Content-Type": "application/xhtml+xml" };
e['xspf'] =     { "Content-Type": "application/xspf+xml" };
e['zip'] =      { "Content-Type": "application/zip" };
e['bin'] =
e['exe'] =
e['dll'] =      { "Content-Type": "application/octet-stream" };
e['deb'] =      { "Content-Type": "application/octet-stream" };
e['dmg'] =      { "Content-Type": "application/octet-stream" };
e['iso'] =
e['img'] =      { "Content-Type": "application/octet-stream" };
e['msi'] =
e['msp'] =
e['msm'] =      { "Content-Type": "application/octet-stream" };
e['docx'] =     { "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
e['xlsx'] =     { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
e['pptx'] =     { "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation" };

// other

e['gz'] =       { "Content-Encoding": "gzip" };
