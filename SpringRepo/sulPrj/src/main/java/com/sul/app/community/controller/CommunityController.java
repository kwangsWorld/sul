package com.sul.app.community.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sul.app.community.service.CommunityService;
import com.sul.app.community.vo.CommunityVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("board")
@RequiredArgsConstructor
public class CommunityController {

	private final CommunityService service;
	
	//게시글작성
	@PostMapping("insert")
	public String insert(CommunityVo vo) throws Exception {
		
		int result = service.insert(vo);
		
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/community/list";
	}
	
	//게시글 목록 조회 (data jsp넘겨서 화면 만들어줌)
	@GetMapping("list")
	public String list(Model model) {
		
		List<CommunityVo> voList = service.list();
		model.addAttribute("communityVoList", voList);
		
		return "community/list";
 	}
	
	//게시글 목록 조회(data만)
	@GetMapping("rest/list")
	@ResponseBody
	public List<CommunityVo> restList(){
		List<CommunityVo> voList = service.list();
		return voList;
	}
	
	//게시글 상세조회 (번호)
	@GetMapping("detail")
	public String detail(CommunityVo vo, Model model) {
		CommunityVo communityVo = service.detail(vo);
		model.addAttribute("communityVo", communityVo);
		return "community/detail";
 	}
	
	//게시글 수정
	@PostMapping("edit")
	public String edit(CommunityVo vo) throws Exception {
		int result = service.edit(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/community/detail?no=" + vo.getCommunityNo();
	}
	
	//게시글 삭제
	@GetMapping("delete")
	public String delete(CommunityVo vo) throws Exception{
		int result = service.delete(vo);
		if(result != 1) {
			throw new Exception();
		}
		return "redirect:/community/list";
	}
	
	
}