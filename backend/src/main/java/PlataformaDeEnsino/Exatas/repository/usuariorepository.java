package PlataformaDeEnsino.Exatas.repository;

import PlataformaDeEnsino.Exatas.model.usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface usuariorepository extends JpaRepository<usuario, Long> {
    usuario findByEmail(String email);
}