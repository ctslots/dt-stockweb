
<!doctype html>

<html style="height:100%">

<head>

<meta charset="utf-8">

<title>股票行情</title>
<link type="css/text" rel="stylesheet" href="css/common.css">
<style type="text/css">

body { margin: 0px; widows:100%; height:100% }

iframe{ margin: 0px; border-width: 0px; }

</style>

</head>



<body style="height:100%;" >


<iframe src="shszhq.php?plate=shsz&s=shsz&type=up100&k=hszsA" width="100%" height="100%" name="mainFrom"scrolling="no"></iframe>


<script type="text/javascript" src="js/jquery-1.6.js"></script>  
<script>
    $(function(){
            $('.tabBox02.tabBox02-2').find('li').click(function(){
                   $(this).addClass('current').siblings().removeClass('current');
            })
    });
</script>
</body>

</html>

