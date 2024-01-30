package com.sul.app.member.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.address.vo.AddressVo;
import com.sul.app.community.vo.CommunityVo;
import com.sul.app.member.service.MailSendService;
import com.sul.app.member.service.MemberService;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("member")
@ResponseBody
@RequiredArgsConstructor
public class MemberController {

	private final MemberService service;
	private final JavaMailSender javaMailSender;
	
	//이메일 인증
	   @PostMapping("join/emailCheck")
	    public Map<String, Object> sendEmail(@RequestBody MemberVo vo) {
	        Map<String, Object> map = new HashMap<>();
	        
	        // 이메일 인증 코드 생성
	        String verificationCode = emailCode();
	        vo.setEmailCode(verificationCode);
	        // 클라이언트로 인증 코드 전송
	        map.put("verificationCode", vo.getEmailCode());
	        

	        try {
	            // JavaMailSender를 사용하여 이메일 전송
	            MimeMessage message = javaMailSender.createMimeMessage();
	            MimeMessageHelper helper = new MimeMessageHelper(message, true);
	            helper.setTo(vo.getEmail());
	            helper.setSubject("퀘스트립 회원가입 인증 코드");
	            helper.setText("회원가입 이메일 인증 코드: " + verificationCode);

	            javaMailSender.send(message);

	            System.out.println("이메일이 성공적으로 전송되었습니다.");
	            System.out.println("vo 이메일 코드"+vo.getEmailCode());
	            map.put("msg", "이메일이 성공적으로 전송되었습니다.");
	        } catch (MessagingException e) {
	            e.printStackTrace();
	            System.err.println("이메일 전송 중 오류가 발생했습니다.");

	            map.put("msg", "이메일 전송 중 오류가 발생했습니다.");
	        }

	        return map;
	    }
	   
	   //이메일 인증 난수 생성
	   private String emailCode() {
	      Random random = new Random();
	      int code = 100000 + random.nextInt(900000);
	      return String.valueOf(code);
	   }
 
	
	//회원가입
	@PostMapping("join")
	public Map<String, String> join(@RequestBody MemberVo vo) throws Exception {
		
		Thread.sleep(3000);
		
		int result = service.join(vo);
		
		Map<String, String> map = new HashMap<String, String>();
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
			
		}
		return map;
	}
	

	
	//로그인
	@PostMapping("login")
	public Map<String, Object> login(@RequestBody MemberVo vo) throws Exception {
		
		MemberVo loginMember = service.login(vo);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("msg", "good");
		map.put("loginMemberVo", loginMember);
		if(loginMember == null) {
			map.put("msg", "bad");
		}
		
		return map;
		
	}
	
	//회원정보 수정
	@PostMapping("edit")
	public Map<String, Object> edit(@RequestBody MemberVo vo) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.edit(vo);
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//회원 탈퇴
	@GetMapping("quit")
	public  Map<String, Object> quit(@RequestBody MemberVo vo) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.quit(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");			
		}
		return map;
	}
	
	//회원정보 상세조회
	@GetMapping("detail")
	public List<MemberVo>detail() {
		return service.detail();
 	}
	
	//기본배송지 설정
	@PostMapping("selectBasicAdrress")
	public Map<String, Object> selectBasicAdrress(@RequestBody MemberVo vo) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		int result = service.selectBasicAdrress(vo);
		System.out.println("result" + result);
		if(result == 1) {
			map.put("msg","good");
		}else {
			map.put("msg", "bad");
		}
		return map;
		
	}
	
}