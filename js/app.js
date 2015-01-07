$(document).ready(function() {



	function getSalaries () {
		var total = 0,
			tempVal,
			salaries = $('.salary').each(function (index, value) {
				tempVal = $(value).val().replace(/,/g, '');

				if (tempVal) {
					total = total + getHourlyRate(parseFloat(tempVal).toFixed(2))
				}
			});

		return total;
	}

	function getHourlyRate (salary) {
		return salary / 2080;
	}

	function setUp () {
		/* Set up watching and painting event */
		$('input[type=text]').keyup(function() {
			var duration = $('.meeting-length').val(),
				salaries = getSalaries(),
				answer = parseFloat(parseFloat(duration) * salaries).toFixed(2);

			if (!isNaN(answer) && (salaries && duration)) {
				$('.cost').html("$" + answer);
			} else {
				$('.cost').html('');
			}
		});
	}

	setUp();

	$('.add').click(function () {
		$('#salaries').append('<input type="text" class="salary">');
		setUp();
	});

});