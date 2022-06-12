$(function () {

	//write your code here


	$("#start").on("click", function () {

		$("#start-over").attr("disabled", true)

	    

		function finishLine() {
			$("#overlay").show()
		}

		let bye
		function clearFinish() {
			bye = setTimeout(function () {
				$("#overlay").css({ "display": "none" })
			}, 3000)
		}

		let complete = false
		let place = 'first'

		function checkComplite() {
			if (complete == false) {
				complete = true
			} else {
				place = 'second'
				$("#start-over").attr("disabled", false)
				finishLine()
				clearFinish()
			}
		}


		let carWidth = $("#car1").width()

		let raceTrackwidth = $(window).width() - carWidth

		let raceTime1 = Math.floor((Math.random() * 5000) + 1);
		let raceTime2 = Math.floor((Math.random() * 5000) + 1);

		$("#car1").animate({
			left: raceTrackwidth
		}, raceTime1, function () {
			checkComplite()
			$("#racinfo1 p").text('Finished in' + " " + place + ' place and clocked in at ' + raceTime1 + ' milliseconds').css({ "color": "white", "border": "1px solid white", "padding": "5px" })
		})

		$("#car2").animate({
			left: raceTrackwidth
		}, raceTime2, function () {
			checkComplite()
			$("#racinfo2 p").text('Finished in' + " " + place + ' place and clocked in at ' + raceTime2 + ' milliseconds').css({ "color": "white", "border": "1px solid white", "padding": "5px" })
		})
	})


	$("#start-over").on("click", function () {
		$(".car").css('left', '0')
		$("#racinfo1 p").text(" ").css({"border": " none", "padding": "0px"})
		$("#racinfo2 p").text(" ").css({"border": " none", "padding": "0px"})
		$("#previousGameinfo").show()
	})


});