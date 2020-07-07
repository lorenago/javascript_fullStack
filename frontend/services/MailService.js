/**
 * Class MailService
 * Contiene las lógicas necesarias para la integración
 * con el CRUD de emails del backend.
 */
export default class MailService {
    constructor() {
        this.URI = '/api/emails';
    }

    async sendEmail(email) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: email
        });
        const newEmail = await response.json();
        return newEmail;
    }
}
