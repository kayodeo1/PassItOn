package com.passiton.service;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * @author Afolayana
 *
 */

import java.util.List;
import java.util.Map;

import javax.ejb.Stateless;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Produces;
import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.passiton.model.User;


@Stateless
public class UserService {
	
	@PersistenceContext(unitName = "app")
	private EntityManager em;
	// @Inject
	// NewCredentialsEventProcessor mailSender;
	// @Inject
	// private NotificationEventProcessor eventProcessor;
//	@EJB
//	private MailService mailService;

//	@AuditLog
//	public Long unsubscribe(User user) {
//		SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
//		String suffix = df.format(new Date());
//		user.setUsername(suffix + "#" + user.getUsername());
//		user.setEmail(suffix + "#" + user.getEmail());
//		user.setMeterNumber(suffix + "#" + user.getMeterNumber());
//		user.setStatus(Status.DISABLED);
//		em.merge(user);
//		em.flush();
//		return user.getId();
//	}





	

//	@AuditLog
	public Long create(User user) {
		// System.out.println("EJB CREATE INVOKED!");
		em.persist(user);
		em.flush();
		// create mail notification event entry
		// NotificationEvent evt = createEvent(user);
		// eventProcessor.create(evt);
		return user.getId();
	}

	public User findByUsername(String username) {
		List<User> found = em.createQuery("select u from User u where u.matricNumber=:username", User.class)
				.setParameter("username", username).getResultList();
		return found.isEmpty() ? null : found.get(0);
	}
}