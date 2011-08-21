/*global ko, window*/

// add foldcomments to the recommended Komodo extensions namespace
// @see http://www.openkomodo.com/blogs/jeffg/namespaces-please
if (typeof(window.extensions) === 'undefined') {
    window.extensions = {};
}

window.extensions.FoldComments = {
    
    /**
     * @public
     */
    expand : function () {
        this.action = 'expand';
        this.toggleFolds();
    },
    
    /**
     * @public
     */
    fold : function () {
        this.action = 'fold';
        this.toggleFolds();
    },
    
    setScimoz : function () {
        this.scimoz = ko.views.manager.currentView.scimoz;
        this.scimoz.setProperty('fold.compact', '0');
        this.scimoz.colourise(0, this.scimoz.length);
    },
    
    toggleFold : function (lineNumber) {
        if (this.action === 'expand') {
            if (!this.scimoz.getFoldExpanded(lineNumber)) {
                this.scimoz.toggleFold(lineNumber);
            }
        } else {
            if (this.scimoz.getFoldExpanded(lineNumber)) {
                this.scimoz.toggleFold(lineNumber);
            }
        }
    },
    
    toggleFolds : function () {
        var lineNumber;
        
        this.setScimoz();
        for (lineNumber = 0; lineNumber < this.scimoz.lineCount; lineNumber++) {
            this.traverseFile(lineNumber);
        }
    },
    
    traverseFile : function (lineNumber) {
        var lineEndPosition = this.scimoz.getLineEndPosition(lineNumber),
            lineStartPosition = this.scimoz.positionFromLine(lineNumber),
            text = this.scimoz.getTextRange(lineStartPosition, lineEndPosition);
            
        if (text.indexOf("/**") !== -1) {
            this.toggleFold(lineNumber);            
        }
    }
};