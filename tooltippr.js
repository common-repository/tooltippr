Tooltipper = function(a){
			this.anch = a;
			this.tip = '';
			this.tipID = '';
			this.timeoutkey = 0;

			this.tooltippr();
			
}//constructor
Tooltipper.prototype = {
	tooltippr: function(){
		//get left or right
		a = this.anch;
		if(!this.tip)
			this.tip = a.getAttribute('title');

		left = (a.offsetLeft>(0.5*$('body')[0].offsetWidth)) ? 1 : 0;
		{//create all elements
			head = document.createElement('div');
				idN = (left) ? 'tip-head-left' : 'tip-head-right' ;
			head.setAttribute('class', 'tip-head');
			head.id = idN;
				ficon = document.createElement('img');
				ficon.src = a.href.match('(http|https):\/\/([^\/]+)\/')[0]+'favicon.ico';
				ficon.setAttribute('class','ficon');
				head.appendChild(ficon);
			head.appendChild(document.createTextNode(this.tip));
			body = document.createElement('div');
			body.setAttribute('class','tip-body');
			body.appendChild(document.createTextNode(a.href));
			container = document.createElement('div');
			container.id = (left) ? 'tippr-left' : 'tippr-right';
				container.appendChild(head);
				container.appendChild(body);
		}
		//assign styles relative to 'a'
		style = 'position:absolute;';
		style += (left) ? 'left:'+(a.offsetLeft-320)+'px;' : 'left:'+(a.offsetLeft+a.offsetWidth+10)+'px;';
		style += 'top:'+(a.offsetTop-(a.offsetHeight*0.2))+'px;';
		style += 'display:none;';
		container.setAttribute('style', style);
		container.setAttribute('class','tippr');
		$('body')[0].appendChild(container);
		
		//rewrite class globals
		this.tipID = container.id;
		
		this.timeoutkey = window.setTimeout(function(){
			$('#'+container.id).fadeIn();
		}, 300);
		this.anch.setAttribute('title', '');
	},

	removeTip: function(){
		if(!this.timeoutkey)
			return;
		else
			window.clearTimeout(this.timeoutkey);
			
		tip = this.tip;
		tipID = this.tipID;
		this.anch.setAttribute('title', tip);
		$('#'+this.tipID).fadeOut(300, function(){
			$('#'+tipID).remove();
		});
	}
}//end of class

function addTips(bodies){
	body = bodies.split(',');
	body_string = '';
	jQuery.each(body, function(){
		body_string += '.'+this+' a,';
	});
	
	$(body_string).hover(function(){
		epoch = new Date();
			epoch = epoch.getTime();
			
		eval('tt'+epoch+' = new Tooltipper($(this)[0])');
	}, function(){
		eval('tt'+epoch+'.removeTip()');
	});
}