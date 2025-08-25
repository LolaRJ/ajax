$(document).ready(function() {
    const username = "ogiansouza"; // Usuário do GitHub que deseja buscar
    const endpoint = `https://api.github.com/users/${username}`;

    $.ajax({
        url: endpoint,
        method: "GET",
        dataType: "json",
        success: function(data) {
            // Atualiza avatar
            $(".profile-avatar").attr("src", data.avatar_url);

            // Atualiza nome e username
            $(".profile-name").text(data.name || data.login);
            $(".profile-username").text("@" + data.login);

            // Atualiza números
            $(".numbers-item:nth-child(1)").html(`<h4>Repositórios</h4>${data.public_repos}`);
            $(".numbers-item:nth-child(2)").html(`<h4>Seguidores</h4>${data.followers}`);
            $(".numbers-item:nth-child(3)").html(`<h4>Seguindo</h4>${data.following}`);

            // Atualiza link para o GitHub
            $(".profile-link").attr("href", data.html_url).text("Ver no Github");
        },
        error: function() {
            alert("Não foi possível buscar os dados do usuário.");
        }
    });
});
