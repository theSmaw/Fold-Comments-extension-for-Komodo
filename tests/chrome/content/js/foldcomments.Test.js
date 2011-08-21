/*global TestCase*/

TestCase('FoldComments.expand', {

    setUp : function () {
        FoldComments = window.extensions.FoldComments
    },
    
    tearDown : function () {},
    
    'test FoldComments.expand is a function' : function () {
        assertFunction(FoldComments.expand);
    },
    
    'test FoldComments.expand does not throw an exception' : function () {
        
        assertNoException(function () {
            FoldComments.expand();
        });
    }
});

TestCase('FoldComments.fold', {

    setUp : function () {
        FoldComments = window.extensions.FoldComments
    },
    
    tearDown : function () {},
    
    'test FoldComments.fold is a function' : function () {
        assertFunction(FoldComments.fold);
    },
    
    'test FoldComments.fold does not throw an exception' : function () {
        
        assertNoException(function () {
            FoldComments.fold();
        });
    }
});