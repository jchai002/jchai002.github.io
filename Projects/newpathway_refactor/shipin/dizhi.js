	/**
	 * 调用视频播放器
	 * @param  {[type]} res    视频地址
	 * @param  {[type]} width  宽度
	 * @param  {[type]} height 高度
	 * @param  {[type]} float  是否浮动
	 * @param  {[type]} picUrl 视频初始图片
	 * @return {[type]}        [description]
	 */
	 var _flashid = 0;
	function showVideo(_res, _width, _height, _float, _picUrl){
		var fid = $('#_video');
		var zid = _flashid + 1;
		var name = "ckplayer_a" + zid;
		var html = "<div class='vo' id="+zid+"></div>";
		if(zid == 1){
			fid.html(html);
		}else{
			fid.append(html);
		}
		if(_float){
			$('#'+zid).css({float:'left'});
			fid.addClass("object_a");
			$('#'+zid).css("margin-bottom","10px");
		}
		
		var flashvars={
		f:_res,
		c:0,
		b:1,
		cpt_lights:0
		};
		var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4','http://www.ckplayer.com/webm/0.webm->video/webm','http://www.ckplayer.com/webm/0.ogv->video/ogg'];
		CKobject.embed('/shipin/ckplayer/ckplayer.swf', zid, name, _width, _height, false, flashvars, video);
		_flashid++;
	}


	function closelights(){//关灯
			//alert(' 本演示不支持开关灯');
	}
	function openlights(){//开灯
		//alert(' 本演示不支持开关灯');
	}



