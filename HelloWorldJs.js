    <script type="text/javascript">
        //test of prototype
        //function BrookTFunc(attr1,attr2)
        //{
        //    this.attr1 = attr1;
        //    this.attr2 = attr2;
        //}
        //BrookTFunc.prototype.showBrook=function(BrookAttr1)
        //{
        //    this.BrookAttr1 = BrookAttr1;
        //}
        //var brook = new BrookTFunc("asp test", "js test");
        //function test() {
        //    alert(brook.hasOwnProperty("attr1"));
        //    alert(brook.hasOwnProperty("attr2"));
        //    alert(brook.hasOwnProperty("BrookAttr1"));
        //}
        //test();

        //extend test
        //var brookT= $.fn.extend(
        //     {
        //         hello: function () { alert("hello"); },
        //         goodbye: function () { alert("bye"); }
        //     }
        //     );
        //brookT.hello();
        //brookT.goodbye();

        //prototype test

        //var BrookParent = function (attr1, attr2) { this.attr1 = attr1; this.attr2 = attr2; }
        //BrookParent.prototype.sayHello = function () {
        //    alert(""+this.attr1+";"+this.attr2+"");
        //};
        //var BrookObj=new BrookParent("Brook", "Test");
        //BrookObj.sayHello();

        var Test = function (data) {
            this.data = data;
        }
        Test.prototype.helloWorld = function () {
            if (!(this.data._name === undefined)) {
                alert(this.data._name);
            }
            if (!(this.data._companyName === undefined)) {
                alert(this.data._companyName);
            }
            if (!(this.data._gender === undefined)) {
                alert(this.data._gender);
            }
            sayHello(this.data);
        }
        function sayHello(data)
        {
            document.write("welcome this test:" + data._name + "<br/>" + "CompanyName:" + data._companyName + "<br/>Gender:" + data._gender);
        }
        var brookTest = new Test({ _name: "Brook", _companyName: "ringier", _gender: "male" });
        brookTest.helloWorld();
        //var record1 = new record({ Name: "Brook" });
        //record1.getHello();
    </script>