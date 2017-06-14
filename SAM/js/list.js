var node = {
    content: null,
    next: null,
};

/*List data structure
* this is used to store current story progression from all available data objects
* Reference: http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html*/
function List(){
    /*Variables*/
    this.start = null; //start node pointer
    this.current = null; //current node pointer
    this.end = null; //end node pointer
    this.len = 0;

    /*Functions*/

    /* makeNode()
     * pre:
     * post: make an empty node that holds null in content and next*/
    this.makeNode = function(){
        return {
            content: null,
            next: null
        }
    };

    /* addNode()
     * pre: List is created
     * post: add an empty node to the list created*/
    this.addNode = function(content){
        if(this.start === null){
            this.start = this.makeNode();
            this.end = this.start;
        }else{
            this.end.next = this.makeNode();
            this.end = this.end.next;
        }
        this.end.content = content;
        this.len++;
    };

    /*getNode()
    * pre: List is created and at least one node is present
    * post: returns the content of the node at the index*/
    this.getNode = function(index){
        var p = this.start;
        for(var i = 0; i<index; i++){
            p = p.next;
        }
        return(p.content);
    };



    /*getLength()
    * pre:List has at least one node
    * post: return the length of the list*/
    this.getLength = function(){
        return this.len;
    };

    /*getStart()
    * pre:List has at least one node
    * post: get the start node*/
    this.getStart = function(){
        return this.start;
    };

    /*getEnd()
     * pre:List has at least one node
     * post: get the end node*/
    this.getEnd = function(){
        return this.end;
    };

    /*remove()
    * pre: List has at least one node
    * post: remove selected node*/
    this.remove = function(index){
        var p = this.getStart();
        var n = p.next;
        for(var i = 0; i < index-1; i++) {
            p = p.next;
            n = p.next;
        }
        p.next = n.next;
        this.len--;
    };

    /*printConsole()
    * pre:List
    * post: prints the list to console*/
    //TODO complete printConsole()
    this.printConsole = function(){
        var list;
        for(var i=0; i<this.getLength(); i++){
            list+=this.getNode(i);
        }
        console.log(list);
    };
}