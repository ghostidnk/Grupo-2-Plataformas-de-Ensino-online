package PlataformaDeEnsino.Exatas.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api")

public class PlataformaDeEnsinoExatas {
    @GetMapping("/cadastro")
    public String getCadastro() {
        return "Cadastro realizado!";
    }
}
