

/**
	server FiveGame
*/

function FiveGame( number ){
	this.number = number;
	this.status = -100; //  -2�Ѿ����� -100δ��ʼ 0���ڽ�����    1�ȴ���������  2�ȴ���������
	this.wSocket = null;
	this.bSocket = null;
};

FiveGame.prototype = {
	setWSocket:function( socket ){
		this.wSocket = socket;
	},
	setBSocket:function( socket ){
		this.bSocket = socket;
	},
	setStatus:function( status ){
		this.status = status;
		this.bSocket && this.bSocket.emit("status", {number:this.number, status:status});
		this.wSocket && this.wSocket.emit("status", {number:this.number, status:status});
	},
	
	lazi:function(x, y, color){
		if(color == this.status){
			if(color == 1){
				this.bSocket.emit("lazi", {x:x,y:y,color:color});
				this.setStatus(2);
			}
			if(color == 2){
				this.wSocket.emit("lazi", {x:x,y:y,color:color});
				this.setStatus(1);
			}
		}
	}
};
