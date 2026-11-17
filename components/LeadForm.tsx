'use client'

import { useId, useState } from 'react'
import { brl, simular } from '@/lib/solar'
import { waLink } from '@/lib/site'

type Erros = { nome?: string; tel?: string; conta?: string }

export default function LeadForm() {
  const id = useId()
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [conta, setConta] = useState('')
  const [telhado, setTelhado] = useState('nao-sei')
  const [erros, setErros] = useState<Erros>({})
  const [link, setLink] = useState<string | null>(null)
  const [armadilha, setArmadilha] = useState('')

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    if (armadilha) return

    const novos: Erros = {}
    if (nome.trim().length < 3) novos.nome = 'Informe seu nome completo.'
    const digitos = tel.replace(/\D/g, '')
    if (digitos.length < 10) novos.tel = 'Informe o WhatsApp com DDD.'
    const valor = Number(conta)
    if (!valor || valor < 120) novos.conta = 'Informe o valor médio da conta.'

    setErros(novos)
    if (Object.keys(novos).length > 0) {
      const primeiro = Object.keys(novos)[0]
      document.getElementById(`${id}-${primeiro}`)?.focus()
      return
    }

    const s = simular(valor)
    const texto = [
      `Olá, Cerrado Solar. Quero uma visita técnica.`,
      ``,
      `Nome: ${nome.trim()}`,
      `WhatsApp: ${tel}`,
      `Conta média: ${brl(valor)}/mês`,
      `Telhado: ${telhado}`,
      ``,
      `Pelo simulador: ${s.kwp.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} kWp · economia estimada de ${brl(s.economia)}/mês.`,
    ].join('\n')

    const url = waLink(texto)
    setLink(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact__card" onSubmit={enviar} noValidate>
      <p className="form-title">Solicitar visita técnica · resposta no mesmo dia útil</p>
      <div className="formgrid">
        <div className="field">
          <label htmlFor={`${id}-nome`}>Nome</label>
          <input
            id={`${id}-nome`}
            className="input"
            name="nome"
            autoComplete="name"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
              if (erros.nome) setErros((v) => ({ ...v, nome: undefined }))
            }}
            onBlur={() => nome.length > 0 && nome.trim().length < 3 && setErros((v) => ({ ...v, nome: 'Informe seu nome completo.' }))}
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={erros.nome ? `${id}-erro-nome` : undefined}
            required
          />
          {erros.nome && (
            <span id={`${id}-erro-nome`} className="form-msg" style={{ marginTop: 0 }}>
              {erros.nome}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor={`${id}-tel`}>WhatsApp</label>
          <input
            id={`${id}-tel`}
            className="input"
            name="tel"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(61) 9 0000-0000"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value)
              if (erros.tel) setErros((v) => ({ ...v, tel: undefined }))
            }}
            aria-invalid={Boolean(erros.tel)}
            aria-describedby={erros.tel ? `${id}-erro-tel` : undefined}
            required
          />
          {erros.tel && (
            <span id={`${id}-erro-tel`} className="form-msg" style={{ marginTop: 0 }}>
              {erros.tel}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor={`${id}-conta`}>Conta média (R$)</label>
          <input
            id={`${id}-conta`}
            className="input"
            name="conta"
            type="number"
            inputMode="numeric"
            min={120}
            step={10}
            placeholder="ex.: 620"
            value={conta}
            onChange={(e) => {
              setConta(e.target.value)
              if (erros.conta) setErros((v) => ({ ...v, conta: undefined }))
            }}
            aria-invalid={Boolean(erros.conta)}
            aria-describedby={erros.conta ? `${id}-erro-conta` : undefined}
            required
          />
          {erros.conta && (
            <span id={`${id}-erro-conta`} className="form-msg" style={{ marginTop: 0 }}>
              {erros.conta}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor={`${id}-telhado`}>Telhado</label>
          <select
            id={`${id}-telhado`}
            className="input"
            name="telhado"
            value={telhado}
            onChange={(e) => setTelhado(e.target.value)}
          >
            <option value="nao-sei">Não sei</option>
            <option value="ceramico">Cerâmico</option>
            <option value="metalico">Metálico</option>
            <option value="laje">Laje</option>
            <option value="solo">Solo / carport</option>
          </select>
        </div>
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor={`${id}-site`}>Site</label>
        <input
          id={`${id}-site`}
          tabIndex={-1}
          autoComplete="off"
          value={armadilha}
          onChange={(e) => setArmadilha(e.target.value)}
        />
      </div>

      <div className="actions">
        <button className="btn btn--lg btn--block" type="submit">
          Quero a visita técnica <span className="arrow">↗</span>
        </button>
      </div>

      <p className="fineprint">
        Ao enviar, o WhatsApp abre com seus dados preenchidos. Nada é gravado neste site — este
        protótipo não tem backend nem CRM.
      </p>

      <div className="next-steps">
        <span>
          <b>Depois do envio</b>
        </span>
        <span>1 · resposta no WhatsApp em minutos</span>
        <span>2 · visita técnica de 30 a 60 minutos</span>
        <span>3 · proposta com projeto e geração estimada</span>
      </div>

      {link && (
        <div className="form-ok" role="status">
          <strong>Diagnóstico pronto</strong>
          <p>
            Abrimos o WhatsApp em outra aba. Se o navegador bloqueou, use o botão abaixo — a
            mensagem já vai com seus números.
          </p>
          <a className="link-u" href={link} target="_blank" rel="noopener noreferrer">
            Abrir conversa no WhatsApp →
          </a>
        </div>
      )}
    </form>
  )
}
