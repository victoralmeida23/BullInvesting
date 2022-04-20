total = 0;

		// Função para adicionar uma espera de evento em uma div
		function load() {
		  // var modal = document.getElementById("back-modal");
		  // modal.addEventListener("click", function(){teste()}, false);
		}
		function abrirModal(title,text){
			document.getElementById("back-modal").setAttribute("class","back-modal");
			document.getElementById("title-modal").innerHTML = title;
			document.getElementById("paragrafo-modal").innerHTML = text;
		}

		function teste(teste){
		    alert(teste);
		}

		function closeModal(){
			document.getElementById("back-modal").setAttribute("class","back-modal-hide");
		}

		function enableQuestion(question,alter){
			
			alternativa = alter;

			for (var i = 0; i < document.getElementsByClassName('spanDivQuestionario').length; i++) {
				document.getElementsByClassName('spanDivQuestionario')[i].setAttribute("class","box-disabled spanDivQuestionario");
				// console.log(i);
			}
			document.getElementById(question+"-"+alter).setAttribute("class","box-enable spanDivQuestionario");
			document.getElementById('nextBtn').setAttribute('class','box-next-enable');

			// document.getElementsByClassName('spanQuestionario')[];
		}

		function calc(question) {
			
			switch (question) {
			    case "q1":
			    	total = (alternativa * 3)+total;
			        console.log(total);
			        break;
			    case "q2":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q3":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q4":
			    	total = (alternativa * 1)+total;
			        console.log(total);
			        break;
			    case "q5":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q6":
			    	total = (alternativa * 3)+total;
			        console.log(total);
			        break;
			    case "q7":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q8":
			    	total = (alternativa * 3)+total;
			        console.log(total);
			        break;
			    case "q9":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q10":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q11":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    case "q12":
			    	total = (alternativa * 2)+total;
			        console.log(total);
			        break;
			    default:
			        console.log('Nenhuma opção escolhida');
			}
		}

		function nextQuestion(question) {
			if (question == "q1") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q2')");
				document.getElementById('questao1').setAttribute('hidden','true');
				document.getElementById('questao2').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			} else if (question == "q2") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q3')");
				document.getElementById('questao2').setAttribute('hidden','true');
				document.getElementById('questao3').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q3") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q4')");
				document.getElementById('questao3').setAttribute('hidden','true');
				document.getElementById('questao4').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q4") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q5')");
				document.getElementById('questao4').setAttribute('hidden','true');
				document.getElementById('questao5').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}   else if (question == "q5") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q6')");
				document.getElementById('questao5').setAttribute('hidden','true');
				document.getElementById('questao6').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q6") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q7')");
				document.getElementById('questao6').setAttribute('hidden','true');
				document.getElementById('questao7').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q7") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q8')");
				document.getElementById('questao7').setAttribute('hidden','true');
				document.getElementById('questao8').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q8") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q9')");
				document.getElementById('questao8').setAttribute('hidden','true');
				document.getElementById('questao9').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q9") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q10')");
				document.getElementById('questao9').setAttribute('hidden','true');
				document.getElementById('questao10').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q10") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q11')");
				document.getElementById('questao10').setAttribute('hidden','true');
				document.getElementById('questao11').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q11") {
				calc(question);
				document.getElementById('nextBtnSpan').setAttribute("onclick","nextQuestion('q12')");
				document.getElementById('questao11').setAttribute('hidden','true');
				document.getElementById('questao12').removeAttribute('hidden');
				document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
			}	else if (question == "q12") {
				calc(question);
				document.getElementById('divNext').setAttribute("hidden","true");
				document.getElementById('questao12').setAttribute("hidden","true");
				document.getElementById('resposta').removeAttribute('hidden');
				// document.getElementById('nextBtn').setAttribute('class','box-next-disabled');
				document.getElementById('pontuacao').innerHTML = total;
				if (total >= 26 & total <= 52) {
					document.getElementById('perfil').innerHTML = "Perfil Conservador";
					document.getElementById('descricao').innerHTML = "Perfil Conservador é aquele que busca a preservação do seu capital e tem baixa tolerância a riscos, prefere os investimentos que podem ser resgatados em um curto período de tempo, os investimentos de Renda Fixa são os mais indicados para esse perfil de investidor.";
				} else if (total >= 53 & total <= 71){
					document.getElementById('perfil').innerHTML = "Perfil Moderado";
					document.getElementById('descricao').innerHTML = "Perfil Moderado é disposto a correr algum risco em busca de retorno diferenciado em médio prazo, tipo de investidor tem menor necessidade de liquidez e se mostra disposto a diversificar suas aplicações em investimentos arrojados.";
				} else if (total >= 72 & total <= 104){
					document.getElementById('perfil').innerHTML = "Perfil Agressivo";
					document.getElementById('descricao').innerHTML = "Perfil Agressivo tem alta tolerância a riscos e baixa necessidade de liquidez em curto ou médio prazo. Na carteira de investimentos do investidor agressivo, a maior parte de suas aplicações é composta por produtos de Renda Variável.";
				}
			}


		}

		document.addEventListener("DOMContentLoaded", load, false);

$(function(){
   $(".img-sobre").hover(function(){
   		$(this).toggleClass('img-hover');
   });
});