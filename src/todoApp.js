
		$("#addItem").keypress(function(event){
			if (event.which===13) {
				var todoItem=$("#addItem").val();
				if(todoItem)
				{
					$("#todolist").append("<div><input type='checkbox' class='todo-item' onchange='taskCompleted(event)'/><span>"+todoItem+"</span><button onclick=deleteItem(event)>delete</button></div>");
				}
				$("#addItem").val("");
				if($("#todolist").children().length && $("#footer").children().length===0){
					$("#footer").append("<button onclick='selectAll()'>All</button><button onclick='selectActive()'>Active</button><button onclick='selectCompleted()'>completed</button>")
				}
			};
		});

		function taskCompleted(event){

			var selectedItem=$(event.currentTarget.parentElement).children()[1];

			if(event.currentTarget.checked){
				completedItem=selectedItem.innerHTML.strike();
				$(selectedItem).replaceWith(completedItem);
			}
			else{
				$(selectedItem).replaceWith("<span>"+selectedItem.innerHTML+"</span>");
			}
		}

		function selectAll(){
			$("#todolist").children().css("color","blue");
		}

		function selectActive(){
			var listOfTodos=$(".todo-item");
			var checkedItems=[],noncheckedItems=[];

			listOfTodos.map(function(index,value){
				if(value.checked){
					checkedItems.push(value);
				}
				else{
					noncheckedItems.push(value);
				}
			});

			noncheckedItems.forEach(function(element){
				$(element.parentElement).css("color","red");
			})
		}

        function selectCompleted(){
			var listOfTodos=$(".todo-item");
			var checkedItems=[],noncheckedItems=[];

			listOfTodos.map(function(index,value){
				if(value.checked){
					checkedItems.push(value);
				}
				else{
					noncheckedItems.push(value);
				}
			});

			checkedItems.forEach(function(element){
				$(element.parentElement).css("color","green");
			})
		}

		function deleteItem(event){
			$(event.currentTarget.parentElement).remove();
			if($("#todolist").children().length===0){
				$("#footer").children().remove();
			}
		}