function $$$(S){
	return (Array.prototype.slice.call(document.querySelectorAll(S)));
}

function extract(){
var x={}
x.static=$$$("input[type='hidden']").reduce( (a,n) => { a[n.name]=n.value; return a;},{})
x.actions=$$$("input[type='button']").reduce( (a,n) => { a[n.name]=n.onclick; return a;},{})
x.fields=$$$("input,select,textarea")
.filter( n => { return n.type!= "button" } )
.reduce( (a,n) => { a.push({ name :n.name,value:n.value,ref:n }); return a;},[])
.reduce( (a,n) => {
	var tokens=n.name.split("_");
	var last_int=parseInt(tokens[tokens.length-1]);
	a["entries"]=a["entries"]||[];
	if( !isNaN(last_int) ){
		var rec=a.entries[last_int-1]||{};
		rec[tokens.slice(0,tokens.length-1).join("_")]=n.value;
		a.entries[last_int-1]=rec;
	}else{
		a[n.name]=n.value;
	}
	return a;
},{});
return x;
}

function insert(){

}
