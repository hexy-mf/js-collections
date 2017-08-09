/* linked-list.js
 * A minimalist implementation of a Linked List inspired by the Java LinkedList.
 */
var Collections = Collections || {};

!function(){
var LinkedList = function() {
    this.first = null;
    this.last = null;
    this.add = function(data) {
        var currentItem = createElement(data);
        if(!this.first){
            this.first = currentItem;
            this.last = currentItem;
        } else {
            this.last.after = currentItem;
            currentItem.before = this.last;
            this.last = currentItem;
        }
    };
    this.concat = function(concatList){
        if(concatList instanceof LinkedList) {
            for(var item of concatList) 
            {
                this.add(item);
            }
        }
        return this;
    };
    this.addFirst = function(data) {
        var currentItem = createElement(data);
        if(this.first === null) {
            this.add(currentItem);
        } else {
            currentItem.after = this.first;
            this.first = currentItem;
        }
        
    };
    this.clear = function() {
        //Clear the chain first
        for(var currentItem of this) {
            currentItem.before.after = null;
            currentItem.before = null;
        }
        this.first = null;
        this.last = null;
    };
    this.getFirst = function() {
        return this.first.data;
    };
    this.getLast = function() {
        return this.last.data;
    };
    
    this[Symbol.iterator] = function () {
        var ref = this;
        return {
            next: function () {
                if(!this._current) {
                    var rtv;
                    this._current = this._ref.first;
                    rtv =  { value: this._current.data, done: false};
                    return rtv;
                } else if(this._current !== this._ref.last)
                {
                    var rtv;
                    this._current = this._current.after;
                    rtv = { value: this._current.data, done: false };
                    return rtv;
                } else
                {
                    var rtv = { value:this._current, done: true };
                    return rtv;
                }
            },
            _current: null,
            _ref: ref
        }
    };
    this.remove = function(data) {
        for(var currentItem of this) {
            var previous = currentItem.before;
            var next = currentItem.after;
            if(currentItem.data === data) {
                previous.after = next;
                next.before = previous;
            }
        }
    };
    this.asArray = function() {
        var theArray = [];
        for(var currentItem of this) {
            theArray.push(currentItem);
        }
        return theArray;
    };
    function createElement(data) {
        return {
            before: null,
            after: null,
            data : data
        };
    }
}
    Collections.LinkedList = LinkedList;
    if(typeof exports !== 'undefined')
    {
        exports.Collections = Collections;
    }
}();