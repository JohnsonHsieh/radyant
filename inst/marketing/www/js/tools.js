<link href="js/select2/select2.css" rel="stylesheet"/>
<script src="js/select2/select2.js"></script>
<script>
    $(document).ready(function() { $("#tool").select2({ width: 'resolve' }); });
    $(document).ready(function() { $("#packData").select2({ width: 'resolve', placeholder: "Choose a file" }); });
    $(document).ready(function() { $("#glm_intsel").select2({ minimumInputLength: 2, placeholder: "Select interactions", width: 'resolve' }); });
</script>
