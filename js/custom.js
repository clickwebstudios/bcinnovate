jQuery(document).ready(function($) {
    $('.show-pass').click(function(){
       var input = $(this).parents('.form-floating').find('input');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });

    $('#login-menu').click(function(){
       $('#login-menu .dropdown').toggleClass('active');
    });

    $("#input-id").fileinput({
        previewTemplates: {
            generic: '<div class="file-preview-frame" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}" style="width: 400px; height: 400px;">\n' +
                '   <div class="kv-file-content">\n' +
                '       <img src="{data}" class="kv-preview-data file-preview-image" title="{caption}" alt="{caption}" style="width:100%; height:100%;">\n' +
                '   </div>\n' +
                '</div>\n'
        },
        allowedFileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
        maxFileSize: 1000,
        showUpload: false,
        dropZoneEnabled: true,
        dropZoneTitle: '<div class="d-flex justify-content-center mb-3"><span class="img-upload"><img src="/img/upload.svg"></span></div><p><span>Upload Event Thumbnail</span><br>or drag and drop<br>PNG, JPG or GIF<br>(max. 400x400px)</p>',
        dropZoneTitleClass: 'file-drop-zone-title',
        dropZoneClickTitle: '',
        browseOnZoneClick: true,
        layoutTemplates: {
            main1: '{preview}\n' +
                '<div class="kv-upload-progress kv-hidden"></div>\n',
        }
    });
});