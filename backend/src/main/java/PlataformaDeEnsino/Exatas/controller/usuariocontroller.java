package PlataformaDeEnsino.Exatas.controller;

import PlataformaDeEnsino.Exatas.model.usuario;
import PlataformaDeEnsino.Exatas.repository.usuariorepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")  // Opcional: agrupa os endpoints
@CrossOrigin(origins = "*")  // Para permitir requisições do frontend
public class usuariocontroller {

    @Autowired
    private usuariorepository usuarioRepository;

    // Endpoint de cadastro
    @PostMapping("/cadastro")
    public ResponseEntity<usuario> cadastrar(@RequestBody usuario usuario) {
        usuario novoUsuario = usuarioRepository.save(usuario);
        return ResponseEntity.ok(novoUsuario);
    }

    // Endpoint de login
    @PostMapping("/login")
    public ResponseEntity<String> logar(@RequestBody usuario usuario) {
        usuario usuarioEncontrado = usuarioRepository.findByEmail(usuario.getEmail());
        
        if (usuarioEncontrado != null && usuarioEncontrado.getSenha().equals(usuario.getSenha())) {
            return ResponseEntity.ok("Login realizado com sucesso!");
        } else {
            return ResponseEntity.status(401).body("Email ou senha incorretos!");
        }
    }
}