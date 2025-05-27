package PlataformaDeEnsino.Exatas.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Usuarios")
public class usuario {  

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String email;

    private String senha;

    @Column(name = "tipo_usuario")
    private String tipoUsuario;  // Sempre será "Aluno"

    private String funcao;

    @Column(name = "grupo_permissao")
    private String grupoPermissao;

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public String getTipoUsuario() { return tipoUsuario; }
    public void setTipoUsuario(String tipoUsuario) { this.tipoUsuario = tipoUsuario; }

    public String getFuncao() { return funcao; }
    public void setFuncao(String funcao) { this.funcao = funcao; }

    public String getGrupoPermissao() { return grupoPermissao; }
    public void setGrupoPermissao(String grupoPermissao) { this.grupoPermissao = grupoPermissao; }
}