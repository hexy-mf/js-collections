/* linked-list.js
 * A minimalist implementation of a Linked List inspired by the Java LinkedList.
 */
var LinkedList = function() {
    this.first = null;
    this.last = null;
    this.add = function(data) {
        var currentItem = createElement(data);
        if(this.first === null){
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
            for(var item in concatList) 
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
        for(var currentItem in this) {
            currentItem.before.after = null;
            currentItem.before = null;
        }
        this.first = null;
        this.last = null;
    };
    this.getFirst = function() {
        return this.first;
    };
    this.getLast = function() {
        return this.last;
    };
    this[Symbol.iterator]= function () {
        var current;
        return {
            next: function () {
                if(current == null) {
                    current = this.first;
                    return { key: this._index, value: current.data, done: false};
                }
                if(current.after !== null )
                {
                    return {key: this._index, value: current.after(), done: false };
                }
                else
                {
                    return{ done: true }; 
                }
            }
        }
    };
    this.remove = function(data) {
        for(var currentItem in this) {
            var previous = currentItem.before;
            var next = currentItem.after;
            if(currentItem.data === data) {
                previous.after = next;
                next.before = previous;
            }
        }
    };
    this.toArray = function() {
        var asArray = [];
        for(var currentItem in this) {
            asArray.push(currentItem);
        }
        return asArray;
    };
    function createElement(data) {
        return {
            before: null,
            after: null,
            data : data
        };
    }
};