//Brook 130625 1142
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="testPage.aspx.cs" Inherits="MaplaceTest130624.testPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=false&libraries=geometry&v=3.7">
    </script>
    <script src="Scripts/maplace.min.js"></script>

    <script type="text/javascript">
        $(function () {
            new Maplace({
                show_markers: true,
                locations: [
                    {
                        lat: //纬度Latitude
                        lon: //经度Longitude
                        title: //鼠标悬停时显示文字 Text when mouse over
                        html: //鼠标点击对应标记后显示 Text when click marker
                        icon: 'http://maps.google.com/mapfiles/marker.png'//marker
                    }
                ],
                map_options: {
                    set_center: [31.237852, 121.45135690000006],
                    zoom: 16
                }
            }).Load();
        });
    </script>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div id="gmap" style="width: 1000px; height: 1000px;"></div>
            <div id="gmap_test1"></div>
            <div id="controls"></div>
        </div>
    </form>
</body>
</html>
