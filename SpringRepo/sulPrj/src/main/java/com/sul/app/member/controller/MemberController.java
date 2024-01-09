package com.sul.app.member.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sul.app.member.service.MemberService;
import com.sul.app.member.vo.MemberVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("member")
@ResponseBody
@RequiredArgsConstructor
public class MemberController {

	private final MemberService service;
	
	//회원가입(화면)
	@GetMapping("join")
	public String join() {
		return "member/join";
	}
	
	//회원가입
	@PostMapping("join")
	public Map<String, String> join(MemberVo vo) throws Exception {
		
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
	public Map<String, Object> login(MemberVo vo, HttpSession session) throws Exception {
		
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
	public String edit(MemberVo vo) throws Exception{
		int result = service.edit(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/home";
	}
	
	//회원 탈퇴
	@GetMapping("quit")
	public  String quit(MemberVo vo, HttpSession session) throws Exception {
		
		int result = service.quit(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		
		session.removeAttribute("loginMember");
		session.setAttribute("alertMsh", "탈퇴가 완료 되었습니다.");
		
		return "redirect:/home";
	}
	
	//회원목록 조회
	@GetMapping("list")
	public String list(Model model) {
		
		List<MemberVo> voList = service.list();
		System.out.println(voList);
		
		model.addAttribute("memberVoList", voList);
		
		return "member/list";
	}
	
	//로그아웃
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/home";
	}
}
