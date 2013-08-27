(function($){
	var init = function(){
		eventList();
		$(".edit_block").rBtn(".edit_B");
		$(".edit_i_block").rBtn(".edit_i");
		$(".ref_page").bind("click", function(){
			window.location.reload(); 
		});
	}
	var eventList = function(){
		$(".add_block").bind("click", function(){
			$(".page_config").show();
		})
		$(".page_config li").bind("click", function(){
			var curItemLen = [], aHtml = '<div class="WYX-g">', dealHtml ="";
			cItemLen = eval($(this).attr("data-info"));
			dealHtml = '<div class="edit_i_block">E</div><ul class="edit_i"><li id="add_Mod" data-action="addMod">添加模块</li><li id="select_mod" data-action="selectMod">选择模块</li></ul>';
			for(var i = 0; i < cItemLen.length; i++){
				aHtml +='<div class="WYX-u-'+ cItemLen[i]+'">'+dealHtml+'</div>';
			}
			aHtml += "</div>";
			$(this).parent().hide();
			$(".page_cont").append(aHtml).aIcon();
		});
		//move
		$(".page_cont").sortable({cursor: "move"});
		$(".page_cont").disableSelection();
		$("html").on('click',".edit_del",function(){
			blockEvent.deletMod($(this).parent());
		});
	}
	$.fn.aIcon = function(){
		$(".WYX-g").append('<div class="edit_block">E</div><ul class="edit_B"><li id="remove_mod" data-action="removeMod">删除模块</li></ul>');
		$("div[class^='WYX-u']").css("position","relative");
	}
	$.fn.rBtn = function(B){
		$(document).bind('contextmenu',function(){return false;});
		$("html").on("mouseup",this.selector,function(e){
			if(e.button ==2){
				$(B).hide();
				$(this).next(B).show();
			} 
		});
		$("html").on("click",B + " li",function(){
				$.fn.Fun = eval("blockEvent." + $(this).attr("data-action"));
					$.fn.Fun($(this).parent());
				});
				$("html").on("mouseleave", B, function(){
					$(this).hide();
		});
	}
	var blockEvent = {
		removeMod : function(Pnode){
			Pnode.parent().remove();
		},
		addMod : function(){
			$(".show_page",parent.document).show();
			$("#showPage",parent.document).attr("src", "tpl/add_block.html").css({"height":$(document).height(),"width":$(document).width()});
			$(".wrap",parent.document).css("width",$(document).width()*2 + 210 + "px");
			$("body",parent.document).scrollLeft(210 + $(document).width());
		},
		selectMod : function(Pnode){
			$(".select_M").show();
			$("#moudle_list > li").bind("click", function(){
				var html = '<div class="edit_des" data-info="'+$(this).attr('id') +'"><div class="edit_del" data-action="deletMod">X</div><h2>' + $('.moudle_title',this).text() + '</h2><p>' + $('.des',this).text() + '</p></div>';
				$(".select_M").hide();
				Pnode.parent().append(html);
				Pnode.parent().css("height",Pnode.parent().children(".edit_des").length * $(".edit_des").height());
				$("#moudle_list li").unbind("click");
			});
			//move
			(Pnode.parent()).sortable({cursor: "move"});
			(Pnode.parent()).disableSelection();
		},
		deletMod : function(Pnode){
			var pCounts = Pnode.parent().children(".edit_des").length;
			if(pCounts > 1 ){
				Pnode.parent().css("height",(Pnode.parent().children(".edit_des").length-1) * $(".edit_des").height());
			}
			Pnode.remove();
		}
	}
	$(function(){
		init();
	});
})(jQuery)