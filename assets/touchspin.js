$(document).ready(function () {
    $('body').on('click', function (e) {
        if (e.target.classList.contains('bootstrap-touchspin-up') ||
            e.target.classList.contains('bootstrap-touchspin-down')) {
            var inputNode = $(e.target).parents('.bootstrap-touchspin').children('.pv_touchspin');
            checkInput(inputNode);
        }
    });

    $('body').on('change', function (e) {
        var selectContainer = $(e.target).parents('.bootstrap-touchspin').children('.pv_touchspin');
        var maxPageSize = parseInt(selectContainer.attr('data-max-page'), 10);
        var minPageSize = parseInt(selectContainer.attr('data-min-page'), 10);
        var pageNumber = parseInt(selectContainer.val(), 10);

        if (e.target.classList.contains('pv_touchspin')) {
            if (pageNumber >= maxPageSize) {
                btnDisabled(selectContainer, '.bootstrap-touchspin-up');
            } else if (pageNumber <= minPageSize) {
                btnDisabled(selectContainer, '.bootstrap-touchspin-down');
            }
            if (pageNumber > minPageSize) {
                btnEnabled(selectContainer, '.bootstrap-touchspin-down');
            }
            if (pageNumber < maxPageSize) {
                btnEnabled(selectContainer, '.bootstrap-touchspin-up');
            }
            selectContainer.focus();
        }
    });

    function checkInput(node) {
        var pageNumber = parseInt(node.val(), 10);
        var maxPageSize = parseInt(node.attr('data-max-page'), 10);
        var minPageSize = parseInt(node.attr('data-min-page'), 10);

        if (pageNumber >= maxPageSize) {
            btnDisabled(node, '.bootstrap-touchspin-up');
        }
        if (pageNumber <= minPageSize) {
            btnDisabled(node, '.bootstrap-touchspin-down');
        }
    }

    function btnDisabled(node, className) {
        var btn = $(node).parent('.bootstrap-touchspin').find(className);
        btn.attr('disabled', 'true');
        btn.css({"background-color": "grey"});
    }

    function btnEnabled(node, className) {
        var btn = $(node).parent('.bootstrap-touchspin').find(className);
        btn.removeAttr('disabled');
        btn.css('background', '');
    }

});