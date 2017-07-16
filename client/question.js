Template.question.events({
    'click [name=submit]': function() {
        //        console.log(document.getElementsByName('title')[0].value) :자바스크립트
        //        submit : 글작성

        var title =$('[name=title]').val(); 
        var num =$('[name=num]').val();
        var count =$('[name=count]').val(); 
        var content =$('[name=content]').val(); 
        //        console.log($('[name=content]').val()) : console은 콘솔창에서 확인하기위해
        //        jQuery
        var obj = {
            '제목': title,
            '글번호' : num,
            '조회수' : count,
            '내용' : content
        }

        //    1. 입력이라면
        if($('[name=hidden_id]').val().length <=0)
        {
            //    hidden id 값이 0보다 작거나 같으면

            console.log(obj);
            CollectionBoard.insert(obj);
            $('[name=title]').val('');
            $('[name=num]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');

        }
        //    2. 수정이라면
        else {

            CollectionBoard.update($('[name=hidden_id]').val(), {$set: obj});
            $('[name=title]').val('');
            $('[name=num]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
        }
    },

    'click [name=deleteBoard]' : function(element, tmpl) {
        //        element : click 된 것, template: 템플릿 전체
        var id= $(element.target).attr('id');
        //        attribute : attr 속성갖고오기
        CollectionBoard.remove({_id: id})      

    },

    'click [name=updateBoard]' : function(element, tmpl) {
        console.log('수정 버튼이 눌렸습니다.');
        //         1. 입력모달을 띄운다.
        $('#myModal').modal('show');
        //         2. 모달의 인풋창에 기존 데이터를 채워넣는다.
        $('[name=hidden_id]').val(this.제목);
        $('[name=title]').val(this.제목);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=content]').val(this.내용);

    }
});

Template.question.helpers({
    list: function() {

        var result = CollectionBoard.find().fetch()
        console.log(result)

        //        var result = [
        //            {
        //                '글번호': 1,
        //                '제목': "제목1",
        //                '조회수':10
        //            },
        //            {
        //                '글번호': 2,
        //                '제목': "제목1",
        //                '조회수':25
        //            },
        //            {
        //                '글번호': 3,
        //                '제목': "제목1",
        //                '조회수':32
        //            },
        //            {
        //                '글번호': 4,
        //                '제목': "제목1",
        //                '조회수':16
        //            }
        //        ]
        return result
    }
});